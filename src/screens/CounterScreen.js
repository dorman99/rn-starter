import React, { useReducer } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
const ACTION_INCREASE = "increase";
const ACTION_DECREASE = "decrease";
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    case "decrease":
      return state.count - 1 < 0
        ? { ...state, count: 0 }
        : { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: ACTION_INCREASE })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: ACTION_DECREASE })}
      />
      <Text style={styles.text}>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CounterScreen;
