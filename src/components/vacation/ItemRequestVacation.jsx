import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "../input/StyledText";
import DateUtil from '../../utils/date';

export default function ItemRequestVacation({ element, selectEvent }) {
    const startDate = DateUtil.convertToString(element.startDate, 'DD/MM/YYYY');
    const endDate = DateUtil.convertToString(element.endDate, 'DD/MM/YYYY');

    const onSelect = ()=>{
        selectEvent(element);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <StyledText align='left'>{element.rut}</StyledText>
                <StyledText align='left'>{element.name}</StyledText>
            </View>
            <View style={styles.containerRight}>
                <View style={{ marginRight: 10 }}>
                    <StyledText align='left'>Inicio: {startDate}</StyledText>
                    <StyledText align='left'>Fin: {endDate}</StyledText>
                </View>
                <View style={{ marginRight: 2 }}>
                    <TouchableOpacity onPress={onSelect}>
                        <Ionicons name="ellipsis-vertical" size={24} />
                    </TouchableOpacity>
                </View>
            </View>
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
        marginVertical: 3,
        elevation: 5,
        height: 60
    },
    containerLeft: {
        marginLeft: 10
    },
    containerRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})
