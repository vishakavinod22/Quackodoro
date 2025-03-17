import { View, Pressable, Text } from "react-native";
import styles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function TopButtons(){
    return (
        <View style={styles.topButtonsContainer}>
            {/* Settings Button */}
            <Pressable style={styles.settingsBtnContainer}>
                {/* <Text style={styles.topBtnText}>Settings</Text> */}
                <MaterialIcons  name="settings" size={30} color="white" />
            </Pressable>

            {/* Reset Button */}
            <Pressable style={styles.resetBtnContainer}>
                {/* <Text style={styles.topBtnText}>Reset</Text> */}
                <MaterialIcons name="refresh" size={30} color="white" />
            </Pressable>
        </View>
    );
}