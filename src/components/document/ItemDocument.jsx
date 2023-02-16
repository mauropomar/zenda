import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { PopupDownload } from './PopupDownload';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import StyledText from "../input/StyledText";

export default function ItemDocument({ element }) {
    const [isChecked, setChecked] = useState(false);

    let popupRef = React.createRef();

    const onShowPopup = () => {
        popupRef.show();
    }

    const onClosePopup = () => {
        popupRef.close();
    }

    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? 'green' : undefined}
                />
                <StyledText align='left'>{element.title}</StyledText>
            </View>
            <TouchableOpacity onPress={onShowPopup}>
                <Ionicons name="ellipsis-vertical" size={24} />
            </TouchableOpacity>
            <PopupDownload
                ref={(target) => popupRef = target}
                onTouchOutside={onClosePopup}
            >
            </PopupDownload>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        marginVertical: 6,
        marginHorizontal: 8,
    },
    checkboxContainer: {
        flexDirection: 'row',
    },
    checkbox: {
        alignSelf: 'center',
        marginRight: 10
    },
    label: {
        margin: 8,
    },
});


