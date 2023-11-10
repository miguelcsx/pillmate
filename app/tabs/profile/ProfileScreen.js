// app/tabs/ProfileScreen.js

import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import UserPic from '../../components/UserPic';
import { useNavigation } from "@react-navigation/native";
import EmergencyButton from "../../components/EmergencyButton";

const ProfileScreen = () => {

    const navigation = useNavigation();



    const handleEditClick = () => {
        navigation.navigate("Edit");
    };

    return (
        <View style={styles.container}>

            <UserPic style={styles.userImage} size={62} color={"white"} />

            <View style={styles.subContainer}>
                <Text style={styles.profileText}>My Profile</Text>

                <Pressable
                    title="Edit Health Profile"
                    style={styles.profileEdit}
                    onPress={handleEditClick}
                >
                    <Text style={styles.peText}>Edit Health Profile</Text>
                </Pressable>

            </View>

            <View style={styles.section}>
                <EmergencyButton />
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
    },
    userImage: {
        backgroundColor: "#374151",
        borderRadius: 50,
        width: 80,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 24,
        alignItems: 'center', // center horizontally
        justifyContent: 'center', // center vertically
    },
    subContainer: {
        marginTop: 8,
        alignItems: 'center',
    },
    profileText: {
        //fontWeight: 600,
        fontSize: 18,
    },
    profileEdit: {
        borderRadius: 6,
        backgroundColor: "#CCC",
        padding: 12,
        paddingHorizontalq: 24,
        marginTop: 8,
    },
    // profile Edit Text
    peText: {
        color: "#2563EB",
    },
    section:{
        width: "100%",
        padding: 16
    }
});

export default ProfileScreen;