import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        height: 53,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    error: {
        borderColor: 'red'
    }
})

const StyledTextInput = ({ style = {}, error, ...props }) => {
    const inputStyle = [
        styles.textInput,
        style,
        error && styles.error
    ]
    return <TextInput style={inputStyle} {...props} />
}

export default StyledTextInput