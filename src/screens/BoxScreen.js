import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child No 1</Text>
        <Text style={styles.textTwoStyle}>Child No 2</Text>
        <Text style={styles.textThreeStyle}>Child No 3</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2, 
        borderColor: "black",
        flexDirection: 'row',
        // alignItems: "center",
        height: 200,
        // justifyContent: 'center'
    },
    textOneStyle: {
        borderWidth: 3,  
        flex: 2,
        borderColor: "red",
    },
    textTwoStyle: {
        borderWidth: 3,  
        flex: 3,
        borderColor: "red",
    },
    textThreeStyle: {
        borderWidth: 3,  
        flex: 2,
        borderColor: "red",
    }
});


export default BoxScreen;