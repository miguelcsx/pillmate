// app/components/Streak.js

import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Streak = ({ streak, onPress }) => {
    // Define a variable to conditionally apply a style based on the streak value
    let iconColor = null;

    // Define different colors based on streak ranges
    switch (true) {
        case streak > 15:
            iconColor = { color: "purple" };
            break;
        case streak > 10:
            iconColor = { color: "red" };
            break;
        case streak > 5:
            iconColor = { color: "orange" };
            break;
        case streak > 3:
            iconColor = { color: "green" };
            break;
        case streak >= 1:
            iconColor = null;
            break;
        default:
            iconColor = { color: "gray" };
            break;
    }

    return (
        <Pressable
            title="Streak"
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="fire" size={24} style={[styles.innerIcon, iconColor]} />
                <Text style={styles.streakText}>{`${streak} days Streak`}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 20,
        borderRadius: 8,
        marginVertical: 8,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    innerIcon: {
        marginRight: 6,
    },
    streakText: {
        fontSize: 16,
    },
});

export default Streak;
