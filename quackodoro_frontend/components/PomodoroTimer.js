import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Pressable} from 'react-native';
import { Image } from 'expo-image';
import Timer from './Timer'; 
import styles from './styles';
import Buttons from './Buttons';
import TopButtons from './TopButtons';

export default function PomodoroTimer(){
  const [selectedTab, setSelectedTab] = useState('Pomodoro');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerFinished, setIsTimerFinished] = useState(true);
  const [timeLeft, setTimeLeft] = useState(25);
  const [controlBtnText, setControlBtnText] = useState('START');
  const intervalRef = useRef(null);

  // Setting minutes in minutes
  const TIMER_VALUES = {
    'Pomodoro': 45 * 60,
    'Short Break': 0.15 * 60,
    'Long Break': 30 * 60,
  };

  // Update tab content based on active tab
  useEffect(() => {
    setTimeLeft(TIMER_VALUES[selectedTab]);
    setIsTimerFinished(true);
    setControlBtnText('START');
  }, [selectedTab]);

  // Function to update button text between START and PAUSE
  const updateBtnText = () => {
    setControlBtnText(prevText => (prevText === 'START' ? 'PAUSE' : 'START'));
  };

  // Update timer based on control button
  useEffect(() => {
    const startTimer = () => {
      setIsTimerFinished(false);
      intervalRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            stopTimer();
            setControlBtnText('START'); // Reset button when time ends
            setIsTimerFinished(true);
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
  }, [controlBtnText, selectedTab]);

  // Get correct duck image based on timer state
  const getDuckImage = () => {
    if (!isTimerRunning) return require('../assets/chilling_duck.png');

    switch (selectedTab) {
      case 'Pomodoro':
        return require('../assets/duck_with_knife.gif');
      case 'Short Break':
        return require('../assets/gaming_duck.gif');
      case 'Long Break':
        return require('../assets/sleeping_duck.gif');
      default:
        return require('../assets/chilling_duck.png');
    }
  };

  return (
    <View style={[styles.appContainer, !isTimerFinished && styles.activeAppContainer]}>
      
      {/* Reset */}
      <TopButtons />
      
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

      <View>
        <Image
          source={getDuckImage()}
          style={styles.duckContainer}
        />
      </View>
    </View>
  );
};
