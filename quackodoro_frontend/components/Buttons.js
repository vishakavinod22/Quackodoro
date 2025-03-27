import { Pressable, Text } from "react-native";
import styles from "./styles";

export default function Buttons({btnText, updateBtnText}){

    return (
        <Pressable style={styles.buttonContainer} onPress={updateBtnText}>
            <Text style={styles.buttonText}>{btnText}</Text>
        </Pressable>
    );
}