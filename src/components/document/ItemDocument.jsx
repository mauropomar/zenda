import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { PopupDownload } from './PopupDownload';
import { ModalConfirm } from '../modal/ModalConfirm';

import StyledText from "../input/StyledText";

export default function ItemDocument({ element, onSelectItem }) {
    const navigation = useNavigation();
    const [isChecked, setChecked] = useState(false);

    let popupRef = React.createRef();
    let popupConfirmRef = React.createRef();

    const onShowPopup = () => {
        popupRef.show();
    }

    const onClosePopup = () => {
        popupRef.close();
    }

    const onCloseModalConfirm = () => {
        popupConfirmRef.close();       
    }

    const selectDocument = (checked) => {
        setChecked(checked);
        onSelectItem(element, checked);
    }

    const onClickMenuOption = () => {
        popupConfirmRef.show();
    }

    const onCancel = () => {      
        popupConfirmRef.close();
        navigation.navigate("CancelDocument");
    }

    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={selectDocument}
                    color={isChecked ? 'green' : undefined}
                />
                <StyledText align='left'>{element.title}</StyledText>
            </View>
            <TouchableOpacity onPress={onShowPopup}>
                <Ionicons name="ellipsis-vertical" size={24} />
            </TouchableOpacity>
            <PopupDownload
                onSelectItem={onClickMenuOption}
                ref={(target) => popupRef = target}
                onTouchOutside={onClosePopup}
            >
            </PopupDownload>
            <ModalConfirm
                ref={(target) => popupConfirmRef = target}
                title="Confirmación cancelación"
                message="Está seguro que desea cancelar esta transición?"
                onTouchOutside={onCloseModalConfirm}
                onAccept={onCancel}
            >
            </ModalConfirm>
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


