import { View, Text } from "react-native";
import Timer from "./components/Timer";
import { useState } from "react";
import Tabs from "./components/Tabs"
import styles from "./components/styles";



export default function App(){

  return (
    <View style={styles.appContainer}>
      <Tabs />
      {/* <Timer timeLeft={timeLeft}/> */}
    </View>
  );
}