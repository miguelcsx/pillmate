// app/component/Gear.js

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

const Gear = () => {

    const navigation = useNavigation();

    const handleSettingsClick = () => {
        navigation.navigate("Settings");
    };


    return (
        <Pressable
            title="Settings"
            style={styles.settings}
            onPress={handleSettingsClick}
        >
            <Ionicons name="cog-outline" size={28} color={"black"} />
        </Pressable>
    )
};

const styles = StyleSheet.create({
    settings: {
        right: 12,
    }
})

export default Gear;