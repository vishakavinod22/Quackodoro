import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    // Tabs
    
    // Timer
    timerContainer : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerText : {
        fontSize: 48,
        fontWeight: 'bold',
        paddingTop: 20
    }
});

export default styles;