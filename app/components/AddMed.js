import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddMed = () => {
    const navigation = useNavigation();

    const handleAddMedClick = () => {
        // Navigate to the screen to add a new medication
        navigation.navigate("MedicationTracker");
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.addButton} onPress={handleAddMedClick}>
                <View style={styles.buttonContent}>
                    <Ionicons name="add" size={20} color="white" style={styles.icon} />
                    <Text style={styles.buttonText}>Add Med</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 20,
        right: 20,
    },
    addButton: {
        backgroundColor: "#00358b",
        borderRadius: 10,
        padding: 10,
    },
    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 4, // Adjust the margin as needed
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});

export default AddMed;
