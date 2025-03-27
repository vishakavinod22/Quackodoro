import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import TIMER_VALUES from "./TimerValue";
import styles from "./styles";

export default function Settings({ onSave }) {
    const [pomodoroTime, setPomodoroTime] = useState(TIMER_VALUES['Pomodoro']);
    const [shortBreakTime, setShortBreakTime] = useState(TIMER_VALUES['Short Break']);
    const [longBreakTime, setLongBreakTime] = useState(TIMER_VALUES['Long Break']);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.settingsContainer}>
                <View style={styles.settingsTextContainer}>
                    <Text style={styles.settingsTitle}>Session Settings</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Pomodoro Time:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={pomodoroTime===TIMER_VALUES['Pomodoro'] ? "" : pomodoroTime}
                        placeholder={String(pomodoroTime)}
                        onChangeText={(text) => {
                            if (/^\d*$/.test(text)) { 
                                const num = Number(text);
                                if (num > 99) {
                                    alert("Maximum allowed time is 99 hours.");
                                } else {
                                    setPomodoroTime(num);
                                }
                            } else {
                                alert("Invalid input! Please enter numbers only.");
                                setPomodoroTime(String(pomodoroTime));
                            }
                        }}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Short Break:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={shortBreakTime===TIMER_VALUES['Short Break'] ? "" : shortBreakTime}
                        placeholder={String(shortBreakTime)}
                        onChangeText={(text) => {
                            if (/^\d*$/.test(text)) { 
                                const num = Number(text);
                                if (num > 99) {
                                    alert("Maximum allowed time is 99 hours.");
                                } else {
                                    setShortBreakTime(num);
                                }
                            } else {
                                alert("Invalid input! Please enter numbers only.");
                                setShortBreakTime(String(shortBreakTime));
                            }
                        }}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Long Break:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={longBreakTime===TIMER_VALUES['Long Break'] ? "" : longBreakTime}
                        placeholder={String(longBreakTime)}
                        onChangeText={(text) => {
                            if (/^\d*$/.test(text)) { 
                                const num = Number(text);
                                if (num > 99) {
                                    alert("Maximum allowed time is 99 hours.");
                                } else {
                                    setLongBreakTime(num);
                                }
                            } else {
                                alert("Invalid input! Please enter numbers only.");
                                setLongBreakTime(String(longBreakTime));
                            }
                        }}
                    />
                </View>

                <TouchableOpacity
                    style={styles.saveButton} 
                    onPress={() => onSave({ pomodoroTime, shortBreakTime, longBreakTime })}
                >
                    <Text style={styles.saveButtonText}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
