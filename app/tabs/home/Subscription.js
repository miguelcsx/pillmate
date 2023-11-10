import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Subscription = () => {
    const subscriptionPlans = [
        {
            title: 'Basic Plan',
            description: 'Enjoy basic features with our subscription plan.',
            features: ['- Medication reminders'],
            price: '$4.99/month',
        },
        {
            title: 'Premium Plan',
            description: 'Enjoy premium features with our subscription plan.',
            features: ['- Medication reminders', '- Health insights and tips', '- Ad-free experience'],
            price: '$9.99/month',
        },
        {
            title: 'Pro Plan',
            description: 'Unlock all the features with our subscription plan.',
            features: ['- Medication reminders', '- Health insights and tips', '- Ad-free experience', '- Priority customer support'],
            price: '$14.99/month',
        },
    ];

    const handlePlanPress = (plan) => {
        Alert.alert(`Purchase ${plan.title}`, `You are about to purchase the ${plan.title} for ${plan.price}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>PillMate Subscription</Text>
            </View>
            <ScrollView contentContainerStyle={styles.planContainer}>
                {subscriptionPlans.map((plan, index) => (
                    <TouchableOpacity key={index} onPress={() => handlePlanPress(plan)} style={styles.plan}>
                        <Text style={styles.planTitle}>{plan.title}</Text>
                        <Text style={styles.planDescription}>{plan.description}</Text>
                        <View style={styles.planFeatures}>
                            {plan.features.map((feature, featureIndex) => (
                                <Text key={featureIndex} style={styles.planFeature}>{feature}</Text>
                            ))}
                        </View>
                        <Text style={styles.planPrice}>{plan.price}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 22,
        backgroundColor: '#f0f0f0',
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    planContainer: {
        flexDirection: 'column', // Display plans in a column
        alignItems: 'center', // Center plans horizontally
    },
    plan: {
        width: '80%', // Adjust the width as needed
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 10,
        elevation: 5,
        borderColor: 'blue', // Add a blue border
        borderWidth: 2, // Specify the border width
    },
    planTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    planDescription: {
        fontSize: 14,
        color: 'black',
        marginBottom: 10,
    },
    planFeatures: {
        marginBottom: 10,
    },
    planFeature: {
        fontSize: 12,
        color: 'black',
    },
    planPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default Subscription;
