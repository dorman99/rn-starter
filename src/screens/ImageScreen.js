import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import ImageDetail from "../components/ImageDetail";


const ImageScreen = () => {
    return <View>
        <ImageDetail title="forest" imageSource={require("../../assets/forest.jpg")} score="1" />
        <ImageDetail title="mountain" imageSource={require("../../assets/mountain.jpg")} score="2" />
        <ImageDetail title="beach" imageSource={require("../../assets/beach.jpg")} score="3" />
    </View>
}

const styles = StyleSheet.create()

export default ImageScreen