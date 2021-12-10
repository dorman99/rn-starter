import React from "react";
import {
    Text, View, StyleSheet, FlatList
} from "react-native";

// flat list bagus buat render list

const ListScreen = () => {
    const FRIENDS = [
        {
            key: "1",
            name: "john-1",
            age: 10
        },
        {
            key: "2",
            name: "john-2",
            age: 24
        },
        {
            key: "3",
            name: "john-3",
            age: 32
        },
        {
            key: "4",
            name: "john-4",
            age: 41
        },
        {
            key: "5",
            name: "john-5",
            age: 22
        },
        {
            key: "6",
            name: "john-6",
            age: 33
        },
        {
            key: "7",
            name: "john-7",
            age: 34
        },

    ]
    return (
        <FlatList
            horizontal={false} // buat scrolling secara horizontal
            data={FRIENDS}
            keyExtractor={(friend) => friend.key}
            renderItem={({ item, index }) => {
                return <Text style={styles.list}>name: {item.name} - age: {item.age}</Text> // key harus berupa string
            }} /> // renderItem item == {item: {name: "johm-1"}, index: 0}
    )
}

const styles = {
    list: {
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 50

    }
}

export default ListScreen