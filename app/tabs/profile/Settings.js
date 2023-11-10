import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.header}>Universidad de Medellín</Text>
        <Text style={styles.description}>
          Pensamiento Ingenieríl
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Created by</Text>
        <Text style={styles.description}>
          Miguel Cárdenas and Gabriel Aguilar
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 48,
    alignItems: "center",
  },
  section: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: "100%"
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
});

export default Settings;
