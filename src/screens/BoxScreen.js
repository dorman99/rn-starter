import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Child No 1</Text>
        <Text style={styles.textStyle}>Child No 2</Text>
        <Text style={styles.textStyle}>Child No 3</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2, 
        borderColor: "black",
        flexDirection: 'row',
        alignItems: "center",
        height: 200,
        justifyContent: 'center'
    },
    textStyle: {
        borderWidth: 3,  
        borderColor: "red",
    }
});


export default BoxScreen;