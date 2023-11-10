import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeStack from './HomeStack'; // Replace with your actual screens
import ReportStack from './ReportStack'; // Replace with your actual screens
import ProfileStack from './ProfileStack'; // Replace with your actual screens

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Medications"
            screenOptions={{
                activeTintColor: 'blue', // Customize the active tab color
                inactiveTintColor: 'gray', // Customize the inactive tab color
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Reports"
                component={ReportStack}
                options={{
                    tabBarLabel: 'Reports',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-stats-chart" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-person" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
