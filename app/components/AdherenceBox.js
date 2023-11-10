import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import ProgressBar from "react-native-progress/Bar";

const AdherenceBox = ({ takenMeds, totalMeds, onPress }) => {
    // Check if totalMeds is zero, and set percentage accordingly
    const percentage = totalMeds === 0 ? 0 : (takenMeds / totalMeds) * 100;

    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>Today's Adherence</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>Taken meds</Text>
                    <Text style={styles.counterText}>{`${takenMeds}/${totalMeds}`}</Text>
                </View>
                <Text style={styles.percentageText}>{`${percentage.toFixed(0)}%`}</Text>
                <ProgressBar
                    progress={percentage / 100}
                    width={null}
                    style={styles.progressBar}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#ADC8E6",
        borderRadius: 20,
        padding: 16,
        marginVertical: 4,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 4,
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    infoText: {
        flex: 1,
        fontSize: 12,
    },
    counterText: {
        fontSize: 12,
        fontWeight: "bold",
    },
    percentageText: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 16,
    },
    progressBar: {
        width: "auto",
        marginTop: 8,
    },
});

export default AdherenceBox;
