import React, { useState } from "react"
import { View, StyleSheet, Button, Text } from "react-native"

const CounterScreen = () => {
    let [count, setCounter] = useState(0)
    const doCount = (condition) => {
        if (condition === "increase") {
            count++;
        } else {
            count--;
        }
        if (count < 0) {
            return;
        }
        setCounter(count)
    }
    return (
        <View>
            <Button title="Increse" onPress={() => doCount("increase")} />
            <Button title="Decrease" onPress={() => doCount("decrease")} />
            <Text style={styles.text}>Current Count: {count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
})

export default CounterScreen;   