import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Timer from './Timer'; 
import styles from './styles';
import Buttons from './Buttons';

export default function PomodoroTimer(){
  const [selectedTab, setSelectedTab] = useState('Pomodoro');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25);
  const [controlBtnText, setControlBtnText] = useState('START');
  const intervalRef = useRef(null);

  // Setting minutes in minutes
  const TIMER_VALUES = {
    'Pomodoro': 25 * 60,
    'Short Break': 0.15 * 60,
    'Long Break': 15 * 60,
  };

  // Update tab content based on active tab
  useEffect(() => {
    setTimeLeft(TIMER_VALUES[selectedTab]);
    setControlBtnText('START');
  }, [selectedTab]);

  // Function to update button text between START and PAUSE
  const updateBtnText = () => {
    setControlBtnText(prevText => (prevText === 'START' ? 'PAUSE' : 'START'));
  };

  // Update timer based on control button
  useEffect(() => {
    const startTimer = () => {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            stopTimer();
            setControlBtnText('START'); // Reset button when time ends
            return TIMER_VALUES[selectedTab]; // Reset time
          }
          return prevTime - 1;
        });
      }, 1000);
    };
  
    const stopTimer = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  
    if (controlBtnText === 'PAUSE') {
      startTimer();
      setIsTimerRunning(true);
    } else {
      stopTimer();
      setIsTimerRunning(false);
    }
  
    return stopTimer;
  }, [controlBtnText, selectedTab]); // Added selectedTab to reset correctly

  return (
    <View style={[styles.appContainer, isTimerRunning && styles.activeAppContainer]}>
      
      {/* Render the three pomodoro tabs */}
      <View style={styles.tabsContainer}>
        {['Pomodoro', 'Short Break', 'Long Break'].map((tab) => (
          <Pressable
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Render the content of the active tab */}
      <Timer timeLeft={timeLeft} />
      
      {/* Pass button state and function to Buttons */}
      <Buttons btnText={controlBtnText} updateBtnText={updateBtnText} />
    </View>
  );
};
