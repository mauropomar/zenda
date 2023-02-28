import React from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 50,
        borderRadius: 10,
        marginBottom: 10
    },
    textInput: {
        borderRadius: 5,
        height: 53,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        width: '90%',
        fontSize: 16
    },
    iconEye: {
        marginVertical: 10
    },
    error: {
        borderColor: 'red'
    }
})

const PasswordInput = ({ style = {}, error, ...props }) => {
    const [visible, setVisible] = React.useState(false);
    const [secure, setSecure] = React.useState(true);
    const inputStyle = [
        styles.textInput,
        error && styles.error
    ]

    const containerStyle = [
        style,
        styles.container
    ]

    const onPressButton = () => {
        setVisible(!visible);
        setSecure(!visible);
    }

    return (
        <View style={containerStyle}>
            <TextInput
                secureTextEntry={secure} style={inputStyle} {...props}
            />
            <View style={styles.sufixIcon}>
                <TouchableOpacity onPress={onPressButton}>
                    {
                        visible ? <Ionicons name="eye" size={24} color="black" style={styles.iconEye} />
                            : <Ionicons name="eye-off" size={24} color="black" style={styles.iconEye} />
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PasswordInput