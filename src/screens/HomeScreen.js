import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.continer}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go To Component Page"
        onPress={(e) => navigation.navigate("Components")}
      />
      <Button title="Go to List Page" onPress={() => navigation.navigate("Lists")} />
      <Button title="Go To Image Screen" onPress={() => navigation.navigate("Images")}/>
      <Button title="Go To Counter Screen" onPress={() => navigation.navigate("Counters")}/>
      <Button title="Go To Color Screen" onPress={() => navigation.navigate("Colors")}/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 20,
  },
  continer: {
    width: "80%",
    paddingLeft: 70,
    paddingTop: 10
  }
});

export default HomeScreen;
