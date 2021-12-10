import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ImageDetail = ({ title, imageSource, score}) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text style={styles.text}>Image Detail: {title}</Text>
            <Text style={styles.text}>image score: {score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 30,
        padding: 10
    }
});

export default ImageDetail;