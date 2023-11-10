// app/components/icons/Log.js

import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet } from "react-native";

const Log = () => {
    const navigation = useNavigation();

    const handleLogClick = () => {
        navigation.navigate("Reports");
    };

    return (
        <Pressable
            title="Log"
            style={styles.log}
            onPress={handleLogClick}
        >
            <Ionicons name="newspaper-outline" size={18} color={"black"} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    log: {
        padding: 8,
        backgroundColor: "white",
        borderRadius: 8,
        marginHorizontal: 4,
    },
});

export default Log;