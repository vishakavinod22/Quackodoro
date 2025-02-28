import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('pomodoro');

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center',  paddingTop: 150, marginBottom: 20 }}>
      {['Pomodoro', 'Short Break', 'Long Break'].map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => setActiveTab(tab)} // Update active tab on press
          style={{
            marginHorizontal: 10,
            padding: 10,
            backgroundColor: activeTab === tab ? '#000' : 'plum', 
            borderRadius: 5,
          }}
        >
          <Text style={{color: activeTab === tab ? '#fff' : 'black'}}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Tabs;
