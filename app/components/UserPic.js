// app/components/UserPic.js
import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UserPic = ({style, size, color}) => {

    return (
        <View style={style}>
            <Ionicons name="person-circle-outline" size={size} color={color} />
        </View>
    )
};

export default UserPic;