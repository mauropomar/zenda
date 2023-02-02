import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    textInput: {
        height:53,
        backgroundColor:'#CDEBCD',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
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