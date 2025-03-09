import { View, Text } from "react-native";
import styles from "./styles";

const formatTime = (timeLeft) => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
};

export default function Timer({timeLeft}){
    return(
        <View style={styles.timerContainer}>
            <Text style={styles.timerText}> {formatTime(timeLeft)} </Text>
        </View>
    );
}