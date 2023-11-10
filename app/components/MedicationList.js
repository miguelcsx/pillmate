import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const MedicationList = ({ selectedDay }) => {
    const navigation = useNavigation();
    const [pills, setPills] = useState([]);

    useEffect(() => {
        loadPills();
    });

    const loadPills = async () => {
        try {
            const pillsData = await AsyncStorage.getItem('pills');
            if (pillsData) {
                const parsedPills = JSON.parse(pillsData);
                setPills(parsedPills);
            }
        } catch (error) {
            console.error('Error loading pills:', error);
        }
    };

    const handleAddMedClick = () => {
        // Navigate to the screen to add a new medication
        navigation.navigate("MedicationTracker");
    };

    const deletePill = async (pillId) => {
        try {
            // Filter out the pill with the specified ID and update the list
            const updatedPills = pills.filter(pill => pill.id !== pillId);
            setPills(updatedPills);

            // Save the updated list to AsyncStorage
            await AsyncStorage.setItem('pills', JSON.stringify(updatedPills));
        } catch (error) {
            console.error('Error deleting pill:', error);
        }
    };

    const pillsForSelectedDate = pills.filter((pill) => {
        const pillStartDate = new Date(pill.startDate);
        pillStartDate.setDate(pillStartDate.getDate() - 1); // Subtract one day
        return pillStartDate <= selectedDay;
    });

    return (

        <Pressable style={styles.container}>
            {pillsForSelectedDate.length === 0 ? (
                <View style={styles.noMedsContainer}>
                    <Text style={styles.noMedsText}>No meds for today</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.addButton} onPress={handleAddMedClick}>
                            <View style={styles.buttonContent}>
                                <Ionicons name="add" size={24} color="blue" />
                                <Text style={styles.buttonText}>Add Medication</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            ) : (
                <ScrollView>
                    {pillsForSelectedDate.map(item => (
                        <View key={item.id} style={styles.pillItem}>
                            <View style={styles.pillContent}>
                                <MaterialCommunityIcons name='pill' size={22} color={"black"} />
                                <View style={styles.textContainer}>
                                    <Text style={styles.pillName}>{item.name}</Text>
                                    <View style={styles.itemInfo}>
                                        <Text>{item.dosage}</Text>
                                        <Text>{item.form}</Text>
                                    </View>
                                </View>
                            </View>
                            <AntDesign name='closesquareo' size={28} color={"black"} onPress={() => deletePill(item.id)} />
                        </View>
                    ))}
                </ScrollView>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    noMedsContainer: {
        flex: 1,
        justifyContent: 'center', // Adjust alignment as needed
        alignItems: 'center',
    },
    noMedsText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    pillItem: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        borderColor: '#ccc',
        padding: 18,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    pillContent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    pillName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 4,
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 12,
    },
    addButton: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        width: "100%", // Set the button to full width
    },
    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#2563EB",
        fontSize: 16,
        textAlign: "center",
    },
    itemInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});

export default MedicationList;
