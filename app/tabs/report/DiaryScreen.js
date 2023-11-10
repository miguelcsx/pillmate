// app/tabs/report/DiaryScreen.js

import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DiaryScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Diary</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.addButton} onPress={() => alert("Add Diary button clicked!")}>
                    <View style={styles.buttonContent}>
                        <Ionicons name="add" size={24} color="blue" />
                        <Text style={styles.buttonText}>Add Diary</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        alignItems: "center",
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    buttonContainer: {
        width: "100%",
        padding: 16,
    },
    addButton: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        width: "100%", // Set the button to full width
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
});

export default DiaryScreen;