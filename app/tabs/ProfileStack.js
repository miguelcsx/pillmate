// app/tabs/ProfileStack.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { commonHeaderOptions } from "../other/Utils";
import ProfileScreen from "./profile/ProfileScreen";
import Settings from "./profile/Settings";
import EditProfile from "./profile/EditProfile";
import Gear from "../components/icons/Gear";

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName="ProfileScreen">
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    title: "",
                    ...commonHeaderOptions,
                    headerRight: () => (
                        <Gear />
                    )
                })}
            />
            <Stack.Screen name="Settings" component={Settings}
                options={{ ...commonHeaderOptions, }} />
            <Stack.Screen name="Edit" component={EditProfile}
                options={{ ...commonHeaderOptions, title: "My profile" }}
            />
        </Stack.Navigator>
    )
};

export default ProfileStack;