import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const ColorCounter = ({ name, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${name}`}></Button>
      <Button onPress={() => onDecrease()} title={`Decrease ${name}`}></Button>
    </View>
  );
};

const styles = StyleSheet.create();
export default ColorCounter;
