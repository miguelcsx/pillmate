// app/components/Export.js

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

const Share = () => {
    const navigation = useNavigation();

    const handleShareClick = () => {
        navigation.navigate("Share");
    };

    return (
        <Pressable
            title="Share"
            style={styles.share}
            onPress={handleShareClick}
        >
            <Ionicons name="share-outline" size={18} color={"black"}/>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    share: {
        padding: 8,
        backgroundColor: "white",
        borderRadius: 8,
        marginHorizontal: 4,
    },
})

export default Share;