import React, { useReducer } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const reducer = (state, action) => {
  if (action.type === "change_email") {
    return { ...state, email: action.payload };
  } else if (action.type === "change_username") {
    return {
      ...state,
      username: action.payload,
      isValidUsername: action.payload.length < 5 ? false : true,
    };
  }
  return state;
};

const TextScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    username: "",
    isValidUsername: false,
  });
  const { email, username, isValidUsername } = state;
  return (
    <View>
      <Text>Input Email:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false} // will be help to email input or password
        style={styles.input}
        onChangeText={(value) =>
          dispatch({ payload: value, type: "change_email" })
        }
      />
      <Text>Input Username:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false} // will be help to email input or password
        style={styles.input}
        onChangeText={(value) =>
          dispatch({ payload: value, type: "change_username" })
        }
      />
      <Text>{`email: ${email}`}</Text>
      <Text>{`usename: ${username}`}</Text>
      {!isValidUsername ? <Text>Username Is Not valid</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
