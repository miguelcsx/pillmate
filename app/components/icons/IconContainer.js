// app/component/IconContainer.js

import React from "react";
import { View, StyleSheet } from "react-native";

const IconContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.horizontalView}>
                {children}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12
    },
    horizontalView: {
        flexDirection: "row",
        alignItems: "center",
    }
})

export default IconContainer;