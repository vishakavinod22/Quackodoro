import { View, Pressable, Text, Modal, Button, Dimensions } from "react-native";
import styles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import Settings from "./Settings";

var {width} = Dimensions.get('window');

export default function TopButtons({onReset, onSettings, toggleSettings, onSave}){

    const [isModalVisible, setIsModalVisible]= useState(false);

    useEffect(() => {
        setIsModalVisible(toggleSettings)
    }, [toggleSettings]);

    const dynamicTopBtns = (size = 35) => {
        if (width > 750) {
            return size * 1.2; 
        }
        return size;
    };

    const savePressed = (newTimes) => {
        onSave(newTimes);
        setIsModalVisible(false); 
    };

    return (
        <View style={styles.topButtonsContainer}>
            {/* Settings Button */}
            <Pressable style={styles.topBtnContainerItem} onPress={onSettings}>
                <MaterialIcons  name="settings" size={dynamicTopBtns()} color="white" />
            </Pressable>

            <Modal visible={isModalVisible} animationType={"slide"} >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Pressable style={styles.modalCloseBtn} onPress={() => setIsModalVisible(false)}>
                            <MaterialIcons name="close" size={dynamicTopBtns()} color="black" />
                        </Pressable>
                        <Settings onSave={savePressed}/>
                    </View>
                </View>
            </Modal>

            {/* Reset Button */}
            <Pressable style={styles.topBtnContainerItem} onPress={onReset}>
                {/* <Text style={styles.topBtnText}>Reset</Text> */}
                <MaterialIcons name="refresh" size={dynamicTopBtns()} color="white" />
            </Pressable>
        </View>
    );
}