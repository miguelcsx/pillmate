// app/component/Bookmark.js

import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet } from "react-native";

const Bookmark = () => {
    const navigation = useNavigation();

    const handleBookmarkClick = () => {
        navigation.navigate("DiaryScreen");
    };

    return (
        <Pressable
            title="Bookmark"
            style={styles.bookmark}
            onPress={handleBookmarkClick}
        >
            <AntDesign name="book" size={18} color={"black"} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    bookmark: {
        padding: 8,
        backgroundColor: "white",
        borderRadius: 8,
        marginHorizontal: 4,
    },
})

export default Bookmark;