import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import {
    addDays,
    eachDayOfInterval,
    eachWeekOfInterval,
    format,
    subDays,
} from "date-fns";

const dates = eachWeekOfInterval(
    {
        start: subDays(new Date(), 0),
        end: addDays(new Date(), 14),
    },
    {
        weekStartsOn: 0,
    }
).reduce((acc, curr) => {
    const allDays = eachDayOfInterval({
        start: curr,
        end: addDays(curr, 6),
    });

    acc.push(allDays);

    return acc;
}, []);

const DateSlider = ({ selectedDay, setSelectedDay }) => {
    const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Initialize with a default value
    const today = new Date(); // Get today's date

    useEffect(() => {
        // Find the index of the week that contains the current date
        const index = dates.findIndex((week) => {
            return week.some((day) => day.toDateString() === today.toDateString());
        });
        if (index !== -1) {
            setCurrentWeekIndex(index);
        }
    }, [dates]);

    return (
        <PagerView style={styles.container} initialPage={currentWeekIndex}>
            {dates.map((week, weekIndex) => (
                <View key={weekIndex}>
                    <View style={styles.row}>
                        {week.map((day, dayIndex) => {
                            const weekDay = format(day, "EEEEE");
                            const isToday = day.toDateString() === today.toDateString(); // Check if the day is today
                            const isSelected = day.toDateString() === selectedDay.toDateString();

                            const dayStyle = [
                                styles.day,
                                isToday && styles.todayE, // Apply 'today' style if it's today
                                isSelected && styles.selected,
                            ];

                            const weekDayStyle = [
                                styles.weekDay,
                                isToday && styles.todayE, // Apply 'today' style to weekDay if it's today
                                isToday && styles.todayCircle, // Add a circle for today
                            ];

                            const weekNumStyle = [styles.weekNum];
                            if (isToday) {
                                weekNumStyle.push(styles.todayN); // Apply 'today' style to weekNum if it's today
                            }

                            return (
                                <TouchableOpacity
                                    key={dayIndex}
                                    style={dayStyle}
                                    onPress={() => setSelectedDay(day)}  // Corrected the setSelectedDay call
                                >
                                    <View style={isToday && styles.circle}>
                                        <Text style={weekDayStyle}>{weekDay}</Text>
                                    </View>
                                    <Text style={weekNumStyle}>{day.getDate()}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            ))}
        </PagerView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 100
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    day: {
        alignItems: "center",
        padding: 14,
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 10,
        color: "gray",
    },
    weekDay: {
        fontWeight: "bold",
        color: "gray",
        borderRadius: 10,
    },
    weekNum: {
        color: "gray",
    },
    todayE: {
        color: "white", // Change the text color to black for today
        fontSize: 12,
    },
    todayN: {
        color: "black",
    },
    circle: {
        backgroundColor: "#374151",
        width: 20,
        height: 20,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
    },
    todayCircle: {
        backgroundColor: "#374151",
    },
    selected: {
        backgroundColor: "lightgray",
    },
});

export default DateSlider;
