import { View, Text } from "react-native";
import Tabs from "./components/Tabs"
import Buttons from "./components/Buttons";
import styles from "./components/styles";



export default function App(){

  return (
    <View style={styles.appContainer}>
      <Tabs />
      <Buttons />
    </View>
  );
}