// app/components/Diary.js

import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Diary = () => {
    const navigation = useNavigation();

    const handleBookmarkClick = () => {
        navigation.navigate("DiaryScreen");
    };

    return (
        <Pressable
            title="Diary"
            style={styles.container}
            onPress={handleBookmarkClick}
        >
            <View style={styles.iconContainer}>
                <AntDesign name="book" size={18} color={"black"} style={styles.innerIcon} />
                <View style={styles.textSection}>
                    <Text style={styles.diaryTitle}>Diary</Text>
                    <Text style={styles.diaryDescription}>Record medication side effects</Text>
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
    diaryTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    diaryDescription: {
        fontSize: 14,
        color: "gray"
    }
});

export default Diary;