// app/components/Logger.js

import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MedicationLog = () => {
    const navigation = useNavigation();

    const handleLogClick = () => {
        navigation.navigate("LogScreen");
    };

    return (
        <Pressable
            title="MedicationLog"
            style={styles.container}
            onPress={handleLogClick}
        >
            <View style={styles.iconContainer}>
                <Ionicons name="pencil" size={18} color={"black"} style={styles.innerIcon} />
                <View style={styles.textSection}>
                    <Text style={styles.logTitle}>Medication Log</Text>
                    <Text style={styles.logDescription}>Edit any medication changes</Text>
                </View>
            </View>
            <Ionicons name="chevron-forward-outline" />
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 16,
        borderRadius: 8,
        marginVertical: 8,
        marginBottom: 24,
        // backgroundColor: "#cad2db",
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
        marginRight: 12,
    },
    textSection: {
        display: "flex",
        flexDirection: "column",
    },
    logTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    logDescription: {
        fontSize: 14,
        color: "gray"
    }
});

export default MedicationLog;