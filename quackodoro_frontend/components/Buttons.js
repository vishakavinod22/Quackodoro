import { Pressable, Text } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function Buttons(){
    const BTN_TEXT_VALUES = {
        start: 'START',
        pause: 'PAUSE',
      };
    
    const updateBtnText = () => {
        switch(btnText){
            case 'START':
                setBtnText(BTN_TEXT_VALUES.pause);
                break;
            case 'PAUSE':
                setBtnText(BTN_TEXT_VALUES.start);
                break;
            default:
                setBtnText(BTN_TEXT_VALUES.start);
        }
    };

    const [btnText, setBtnText] = useState('START');

    return (
        <Pressable style={[styles.buttonContainer, btnText === BTN_TEXT_VALUES.pause && styles.pauseBtn]}  onPress={updateBtnText}>
            <Text style={[styles.buttonText, btnText === BTN_TEXT_VALUES.pause && styles.pauseBtnText]}>{btnText}</Text>
        </Pressable>
    );
}