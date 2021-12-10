import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = "dorman";
    const greeting = <Text style={styles.subHeader}>Hello world {name}</Text>; // jsx variable
    return (
        <View>
            <Text style={styles.header}>Getting Ready With RN</Text>
            {greeting}
        </View>)
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20
    },
    subHeader: {
        fontSize: 45
    }
})

export default ComponentsScreen;