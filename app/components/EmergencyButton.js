// app/conmponents/EmergencyButton.js

import React from "react";
import { View, Text, Pressable, Linking, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const EmergencyButton = () => {

    const emergencyNumber = '123';

    const handlePress = () => {
        const phoneNumber = `tel:${emergencyNumber}`
        Linking.openURL(phoneNumber);
    };

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <View style={styles.button}>
                <FontAwesome name="phone" size={16} color={"red"}/>
                <Text style={styles.buttonText} >Call Emergency</Text>
            </View>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        width: "100%", // Set the button to full width
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "red",
        fontSize: 14,
        marginLeft: 6
    }
});

export default EmergencyButton;