// app/notifications/PushNotifications.js

import React from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FF231F7C",
        });
    }


    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus !== "granted") {
            alert("Failed to get push token for push notifications!");
            return;
        }

        token = (await Notifications.getExpoPushTokenAsync({ projectId: 'your-project-id' })).data;
        console.log(token);
    } else {
        alert("Must use physical device for Push Notifications");
    }

    return token;
}

export async function schedulePushNotification() {
    const pillsData = await AsyncStorage.getItem('pills');

    if (pillsData) {
        const parsedPills = JSON.parse(pillsData);

        for (const pill of parsedPills) {
            const notificationDate = new Date(pill.reminderTimes); // Convert the reminderTimes to a single Date object
            const currentDate = new Date();

            if (notificationDate > currentDate) {
                try {
                    await Notifications.scheduleNotificationAsync({
                        content: {
                            title: `Time to take ${pill.name}`,
                            body: `${pill.dosage}`,
                            sound: 'default', // You can specify the sound you want here
                        },
                        trigger: {
                            date: notificationDate,
                            seconds: 2,
                            repeats: "day",
                        },
                        // Add custom behavior for vibration and showing an alert
                        ios: {
                            sound: true, // Play sound
                            _displayInForeground: true, // Show alert
                        },
                        android: {
                            channelId: 'default', // Use the defined channel
                            vibrate: [0, 250, 250, 250], // Vibrate
                        },
                    });
                } catch (error) {
                    console.error("Error scheduling notification: ", error);
                }
            }
        }
    }
};

