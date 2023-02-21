import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


const SearchInput = ({ placeHolder, searchEvent }) => {
    const [text, setText] = useState("");

    const onChangeText = (newValue) => {
        setText(newValue);
        searchEvent(newValue)
    }

    const onClear = () => {
        setText("");
        searchEvent("")
    }

    return (
        <View style={styles.container}>
            <View style={styles.prefixIcon}>
                <MaterialIcons name="search" size={24} />
            </View>
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
                onChangeText={onChangeText}
                value={text}
            />
            <View style={styles.sufixIcon}>
                <TouchableOpacity onPress={onClear}>
                    <MaterialIcons name="close" size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 50,
        borderWidth: 0.6,
        borderRadius: 10,
        marginBottom: 20
    },
    prefixIcon: {
        marginVertical: 15,
        marginLeft: 10
    },
    sufixIcon: {
        marginVertical: 15,
        marginRight: 10
    },
    input: {
        marginVertical: 15,
        flex: 1
    }
});