// app/tabs/HomeScreen.js

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, } from "react-native";
import AddMed from "../../components/AddMed";
import DateSlider from "../../components/DateSlider";
import MedicationList from "../../components/MedicationList";
import { format } from "date-fns";

const HomeScreen = () => {
    const [selectedDay, setSelectedDay] = useState(new Date());

    // Format the selected day as "Weekday DD, MM YY"
    const formattedSelectedDay = format(selectedDay, "EEEE dd, MMM yy");


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <DateSlider selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
            <Text style={styles.selectedDateText}>{formattedSelectedDay}</Text>
            <MedicationList selectedDay={selectedDay} />
            <AddMed />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        //alignItems: "center", // Center content horizontally
        justifyContent: "flex-start", // Align content to the top
    },
    selectedDateText: {
        fontWeight: "bold",
        paddingHorizontal: 20
    },
})

export default HomeScreen;