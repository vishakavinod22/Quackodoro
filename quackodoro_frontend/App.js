import { View, Text } from "react-native";
import Timer from "./components/Timer";
import { useState } from "react";
import Tabs from "./components/Tabs"

// Setting minutes in minutes
const TIMER_VALUES = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
};

export default function App(){
  const [timeLeft, setTimeLeft] = useState(TIMER_VALUES.pomodoro);

  return (
    <View style={{ flex: 1, backgroundColor: 'plum'}}>
      <Tabs />
      <Timer timeLeft={timeLeft}/>
    </View>
  );
}