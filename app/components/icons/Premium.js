// app/components/icons/Premium.js

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet } from "react-native";

const Premium = () => {
    const navigation = useNavigation();

    const handlePremiumClick = () => {
        navigation.navigate("Subscription");
    };

    return (
        <Pressable
            title="Premium"
            style={styles.premium}
            onPress={handlePremiumClick}
        >
            <MaterialCommunityIcons name="star-four-points" size={18} color={"blue"}/>
        </Pressable>
    )

};

const styles = StyleSheet.create({
    premium: {
        padding: 8,
        backgroundColor: "white",
        borderRadius: 8,
        marginHorizontal: 4,
    }
})

export default Premium;