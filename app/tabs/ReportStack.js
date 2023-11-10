// app/tabs/ReportStack.js

import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { commonHeaderOptions } from "../other/Utils";

import ReportScreen from "./report/ReportScreen";
import DiaryScreen from "./report/DiaryScreen";
import LogScreen from "./report/LogScreen";

import IconContainer from "../components/icons/IconContainer";
import Share from "../components/icons/Share";
import Bookmark from "../components/icons/Bookmark";


const Stack = createStackNavigator();

const ReportStack = () => {
    return (
        <Stack.Navigator initialRouteName="ReportScreen">
            <Stack.Screen
                name="ReportScreen"
                component={ReportScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    title: "Medications",
                    ...commonHeaderOptions,
                    headerRight: () => (
                        <IconContainer>
                            <Bookmark />
                            <Share />
                        </IconContainer>
                    )
                })}
            />

            <Stack.Screen
                name="DiaryScreen"
                component={DiaryScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    title: "",
                    ...commonHeaderOptions,
                })}
            />

            <Stack.Screen
                name="LogScreen"
                component={LogScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    title: "",
                    ...commonHeaderOptions,
                    headerRight: () => (
                        <IconContainer>
                            <Share />
                        </IconContainer>
                    )
                })}
            />

        </Stack.Navigator>
    )
};


export default ReportStack;