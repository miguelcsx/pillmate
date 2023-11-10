// app/tabs/ReportScreen.js

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import AdherenceBox from "../../components/AdherenceBox";
import { Ionicons } from "@expo/vector-icons";
import Streak from "../../components/Streak";
import Diary from "../../components/Diary";
import MedicationLog from "../../components/MedicationLog";
import Headlines from "../../components/Headlines";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ReportScreen = () => {

    const [totalMeds, setTotalMeds] = useState(0); // Set your total meds count here
    const [takenMeds, setTakenMeds] = useState(0);
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        loadPills();
    });

    const loadPills = async () => {
        try {
            const pillsData = await AsyncStorage.getItem('pills');
            if (pillsData) {
                const parsedPills = JSON.parse(pillsData);
                setTotalMeds(parsedPills.length);
            }
        } catch (error) {
            console.error('Error loading pills:', error);
        }
    };

    const handleStreak = () => {
        setStreak(streak + 1);
    }

    const handleAdherenceBoxPress = () => {
        if (takenMeds < totalMeds) {
            // Increment the count if it's less than the total
            setTakenMeds(takenMeds + 1);
        } else {
            // Reset the count to zero if it's equal to the total
            setTakenMeds(0);
            handleStreak();
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <AdherenceBox takenMeds={takenMeds} totalMeds={totalMeds} onPress={handleAdherenceBoxPress} />
            <Streak streak={streak} onPress={() => { console.log("Streak") }} />
            <Headlines />
            <Diary />
            <MedicationLog />

        </ScrollView>
    )
};


const styles = StyleSheet.create({
    container: {
        margin: 12,
        // flex: 1
    },

})

export default ReportScreen;