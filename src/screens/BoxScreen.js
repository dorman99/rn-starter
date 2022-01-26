import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textBoxOneStyle}></View>
      <View style={styles.textBoxTwoStyle}></View>
      <View style={styles.textBoxThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    borderColor: "black",
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
  },
  textBoxOneStyle: {
    height: 75,
    width: 75,
    backgroundColor: 'red'
  },
  textBoxTwoStyle: {
    height: 75,
    width: 75,
    alignSelf: 'flex-end',
    backgroundColor: 'green'
  },  
  textBoxThreeStyle: {
    height: 75,
    width: 75,
    backgroundColor: 'blue'
  }
});

export default BoxScreen;
