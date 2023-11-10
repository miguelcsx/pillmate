import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { commonHeaderOptions } from "../other/Utils";
import HomeScreen from "./home/HomeScreen";
import Share from "../components/icons/Share";
import IconContainer from "../components/icons/IconContainer";
import Log from "../components/icons/Log";
import Medication from "../components/icons/Medication";
import Premium from "../components/icons/Premium";
import MedicationTracker from "./home/MedicationTracker";
import Subscription from "./home/Subscription";

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    title: "PillMate",
                    ...commonHeaderOptions,
                    headerRight: () => (
                        <IconContainer>
                            <Medication />
                            <Log />
                            <Premium />
                        </IconContainer>
                    )
                })}
            />
            <Stack.Screen
                name="MedicationTracker"
                component={MedicationTracker}
                options={({ navigation }) => ({
                    headerShown: true,
                    title: "Add med",
                    ...commonHeaderOptions,
                })}
            >

            </Stack.Screen>
            <Stack.Screen
                name="Subscription"
                component={Subscription}
                options={({ navigation }) => ({
                    headerShown: true,
                    title: "",
                    ...commonHeaderOptions,
                })}
            >

            </Stack.Screen>
        </Stack.Navigator>
    )
};

export default HomeStack;