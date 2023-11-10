import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { format, startOfMonth } from 'date-fns';
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';

const LogScreen = () => {
    const [selectedDate, setSelectedDate] = useState(startOfMonth(new Date()));
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const currentDate = new Date();
    const [selectedText, setSelectedText] = useState(format(currentDate, 'EEEE, dd MMM'));


    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const formattedDate = format(selectedDate, 'MMMM yyyy');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={showDatePicker} style={styles.headerTextContainer}>
                    <Text style={styles.currentMonth}>{formattedDate}</Text>
                    <Ionicons name="chevron-down" size={20} color="black" style={styles.icon} />
                </Pressable>
            </View>

            <Text style={styles.logTitle}>Medication Log</Text>


            <Pressable style={styles.extraDoseButton} onPress={() => alert("Log Extra Dose button clicked!")}>
                <View style={styles.buttonContent}>
                    <Ionicons name="add" size={24} color="blue" />
                    <Text style={styles.buttonText}>Log Extra Dose</Text>
                </View>
            </Pressable>

            {selectedText && (
                <Text style={styles.selectedDateText}>{selectedText}</Text>
            )}

            {isDatePickerVisible && (
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="spinner"
                    onChange={(event, selectedDate) => {
                        if (event.type === "set") {
                            setSelectedDate(selectedDate || selectedDate);
                            hideDatePicker();
                            const formattedSelectedDate = format(selectedDate || selectedDate, 'EEEE, dd MMM');
                            setSelectedText(formattedSelectedDate);
                        }
                    }}
                    // Customize the header format to display only month and year
                    headerText="Select a date"
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
    headerTextContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    currentMonth: {
        fontSize: 18,
        fontWeight: "bold",
    },
    icon: {
        marginLeft: 10,
    },
    logTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
    },
    extraDoseButton: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 24,
        width: "100%",
    },
    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#2563EB",
        fontSize: 16,
        textAlign: "center",
    },
    selectedDateText: {
        fontSize: 16,
        marginTop: 24,
        color: "gray"
    },
});

export default LogScreen;
