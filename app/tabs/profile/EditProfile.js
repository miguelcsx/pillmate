// app/tabs/profile/EditProfile.js

import React from "react";
import { ScrollView, Text, StyleSheet, Pressable, View} from "react-native";
import UserPic from "../../components/UserPic";
import { Ionicons } from "@expo/vector-icons";

const EditProfile = () => {

    const handleClick = () => {

    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <UserPic style={styles.userImage} size={62} color={"white"} />

            <View style={styles.subContainer}>
                <Pressable
                    title="Name"
                    style={styles.labels}
                    onPress={handleClick}
                >
                    <Text>Name</Text>
                    <Ionicons name="chevron-forward-outline" />
                </Pressable>

                <View style={styles.section}>
                    <Pressable
                        title="Conditions"
                        style={styles.labels}
                        onPress={handleClick}
                    >
                        <View style={styles.iconContainer}>
                            <Ionicons name="pulse-outline" style={styles.innerIcon} />
                            <Text>Add Conditions</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" />
                    </Pressable>

                    <Pressable
                        title="Weight"
                        style={styles.labels}
                        onPress={handleClick}
                    >
                        <View style={styles.iconContainer}>
                            <Ionicons name="clipboard-outline" style={styles.innerIcon} />
                            <Text>Add Weight</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" />

                    </Pressable>
                </View>

                <View style={styles.section}>
                    <Pressable
                        title="Birth"
                        style={styles.labels}
                        onPress={handleClick}
                    >
                        <Text>Birth Date</Text>
                        <Ionicons name="chevron-forward-outline" />
                    </Pressable>

                    <Pressable
                        title="Gender"
                        style={styles.labels}
                        onPress={handleClick}
                    >
                        <Text>Gender</Text>
                        <Ionicons name="chevron-forward-outline" />
                    </Pressable>

                    <Pressable
                        title="Height"
                        style={styles.labels}
                        onPress={handleClick}
                    >
                        <Text>Height</Text>
                        <Ionicons name="chevron-forward-outline" />
                    </Pressable>
                </View>

            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: "#F2F2F2",
    },
    userImage: {
        backgroundColor: "#374151",
        borderRadius: 50,
        width: 80,
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center', // center horizontally
        justifyContent: 'center', // center vertically
    },
    subContainer: {
        width: "100%",
        maxWidth: 448,
        padding: 16,
        marginTop: 24,
    },
    labels: {
        width: "100%",
        padding: 16,
        borderRadius: 8,
        marginBottom: 8,
        backgroundColor: "#F8FAFC",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    section: {
        marginTop: 32,
        justifyContent: 'center',
    },
    iconContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    innerIcon: {
        marginRight: 8,
    }
});

export default EditProfile;