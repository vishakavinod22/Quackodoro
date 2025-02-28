import { View, Text } from "react-native";
import styles from "./styles";

const formatTime = (minutes) => {
    return `${String(minutes).padStart(2, '0')} : 00`;
};

export default function Timer({timeLeft}){
    return(
        <View style={styles.timerContainer}>
            {/* <Text style={styles.timerText}> HH : MM </Text> */}
            <Text style={styles.timerText}> {formatTime(timeLeft)} </Text>
        </View>
    );
}