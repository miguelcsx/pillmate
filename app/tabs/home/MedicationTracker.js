// app/tabs/home/MedicationTracker.js

import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { schedulePushNotification } from '../../notifications/PushNotifications';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';


const MedicationTracker = () => {

    const options = ['tablet', 'capsule', 'liquid', 'injection'];

    const [pillName, setPillName] = useState('');
    const [dosage, setDosage] = useState('');
    const [frequency, setFrequency] = useState('');
    const [form, setForm] = useState(options[0]);
    const [startDate, setStartDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [reminderTimes, setReminderTimes] = useState(new Date());
    const [showReminderTimePicker, setShowReminderTimePicker] = useState(false);
    const [selectedReminderTime, setSelectedReminderTime] = useState(new Date());

    const handleSave = async () => {
        try {
            // Retrieve the existing pills data from AsyncStorage (if any)
            const existingPills = await AsyncStorage.getItem('pills');
            const parsedPills = existingPills ? JSON.parse(existingPills) : [];

            // Create a new pill object
            const newPill = {
                id: Date.now().toString(),
                name: pillName,
                dosage,
                frequency,
                form,
                startDate,
                reminderTimes,
            };

            // Add the new pill to the existing pills array
            parsedPills.push(newPill);

            // Save the updated pills array to AsyncStorage
            await AsyncStorage.setItem('pills', JSON.stringify(parsedPills));

            // Clear the input fields and state
            setPillName('');
            setDosage('');
            setFrequency('');
            setForm('tablet');
            setStartDate(new Date());
            setReminderTimes(new Date());
            setShowStartDatePicker(false);
            setShowReminderTimePicker(false);

            await schedulePushNotification();


            alert("Successfuly saved!");

            // You can also navigate to another screen or perform any other action after saving
        } catch (error) {
            console.error('Error saving pill:', error);
        }
    };

    const handleStartDateChange = (event, selectedDate) => {
        setShowStartDatePicker(false);
        setStartDate(selectedDate || startDate);
    };

    const addReminderTime = () => {
        setShowReminderTimePicker(true);
    };

    const handleReminderTimeChange = (event, selectedTime) => {
        setShowReminderTimePicker(false);
        if (selectedTime) {
            setReminderTimes(selectedTime);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Med Name</Text>
            <TextInput
                style={styles.input}
                value={pillName}
                onChangeText={text => setPillName(text)}
                placeholder="Enter pill name"
            />

            <Text style={styles.label}>Dosage</Text>
            <TextInput
                style={styles.input}
                value={dosage}
                onChangeText={text => setDosage(text)}
                placeholder="Enter dosage"
            />

            <Text style={styles.label}>Frequency</Text>
            <TextInput
                style={styles.input}
                value={frequency}
                onChangeText={text => setFrequency(text)}
                placeholder="Enter frequency (e.g., daily)"
            />

            <View style={styles.formContainer}>
                <Text style={styles.label}>Form</Text>
                <Picker
                    style={styles.formInput}
                    selectedValue={form}
                    onValueChange={(itemValue, itemIndex) => setForm(itemValue)}
                >
                    {options.map((option) => (
                        <Picker.Item style={styles.formInput}
                            label={option} value={option} key={option} />
                    ))}
                </Picker>
            </View>

            <View style={styles.timeContainer}>
                <Pressable style={styles.timeButton} onPress={() => setShowStartDatePicker(true)}>
                    <Ionicons name='calendar' size={24} color={"black"} />
                    <Text>Date</Text>


                    <Text>{startDate.toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: "short",
                        year: "2-digit",
                    })}</Text>

                </Pressable>

                {showStartDatePicker && (
                    <DateTimePicker
                        value={startDate}
                        mode="date"
                        display="default"
                        onChange={handleStartDateChange}
                    />
                )}

                <Pressable style={styles.timeButton} onPress={addReminderTime}>
                    <Ionicons name='time' size={24} color={"black"} />
                    <Text>Time</Text>

                    <Text>{reminderTimes.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</Text>

                </Pressable>

                {showReminderTimePicker && (
                    <DateTimePicker
                        value={selectedReminderTime}
                        mode="time"
                        display="default"
                        onChange={handleReminderTimeChange}
                    />
                )}


            </View>

            <Pressable style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveContent}>Save Med</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
    formContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
    },
    formInput: {
        width: 200,
        height: 40,
        fontSize: 16,
        color: "black",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    timeButton: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 24,
        flexDirection: "column",
        alignItems: "center",
    },
    saveButton: {
        backgroundColor: "#2563EB",
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginTop: 56,
    },
    saveContent: {
        fontSize: 16,
        textAlign: "center",
        color: "white"
    }

});

export default MedicationTracker;
