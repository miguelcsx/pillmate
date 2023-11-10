// app/components/icons/Medication.js

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet } from "react-native";

const Medication = () => {
    const navigation = useNavigation();

    const handleMedicationClick = () => {
        navigation.navigate("MedicationTracker");
    };

    return (
        <Pressable
            title="Medication"
            style={styles.medication}
            onPress={handleMedicationClick}
        >
            <MaterialCommunityIcons name="pill" size={18} color={"black"}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    medication: {
        padding: 8,
        backgroundColor: "white",
        borderRadius: 8,
        marginHorizontal: 4,
    }
});

export default Medication;