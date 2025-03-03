import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Timer from './Timer'; 
import styles from './styles';

export default function Tabs(){
  const [selectedTab, setSelectedTab] = useState('Pomodoro');
  const [timeLeft, setTimeLeft] = useState(25);

  // Setting minutes in minutes
  const TIMER_VALUES = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  };

  // Function to display tab content based on active tab
  useEffect(() => {
    switch (selectedTab) {
      case 'Pomodoro':
        setTimeLeft(TIMER_VALUES.pomodoro);
        break;
      case 'Short Break':
        setTimeLeft(TIMER_VALUES.shortBreak);
        break;
      case 'Long Break':
        setTimeLeft(TIMER_VALUES.longBreak);
        break;
      default:
        setTimeLeft(TIMER_VALUES.pomodoro);
    }
  }, [selectedTab]);

  return (
    <View >
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
    </View>
  );
};
