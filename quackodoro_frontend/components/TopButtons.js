import { View, Pressable, Text, Modal, Button, Dimensions } from "react-native";
import styles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useEffect, useState } from "react";

var {height, width} = Dimensions.get('window');

export default function TopButtons({onReset, onSettings, toggleSettings}){

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

    return (
        <View style={styles.topButtonsContainer}>
            {/* Settings Button */}
            <Pressable style={styles.topBtnContainerItem} onPress={onSettings}>
                <MaterialIcons  name="settings" size={dynamicTopBtns()} color="white" />
            </Pressable>

            <Modal visible={isModalVisible} animationType={"slide"} >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text>This is the modal content</Text>
                        <Button 
                        title="Close Modal"
                        onPress={() => setIsModalVisible(false)}
                        color="midnightblue"
                        />
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