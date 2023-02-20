import React from 'react';
import { View, StyleSheet } from "react-native";
import DateUtil from '../../utils/date';
import StatusUtil from '../../utils/status';
import StyledText from '../input/StyledText';

const RenderSeparator = () => (
    <View
        style={{
            backgroundColor: 'black',
            height: 1,
        }}
    />
);

export default function ItemAdvanceState({ element }) {
    const date = new Date(element.dateRequest);
    const titleDate = DateUtil.formatDateMonthYear(date);
    const dateStr = DateUtil.convertToString(date, 'DD/MM/YY');
    const statusStyle = StatusUtil.getBackgroundRequest(element.state);
    return (
        <View style={styles.container}>
            <StyledText align='left' fontWeight="bold" style={styles.title}>{titleDate}</StyledText>
            <View style={styles.row}>
                <StyledText align='left'>Fecha de Solicitud(?)</StyledText>
                <StyledText align='right' fontWeight="bold">{dateStr}</StyledText>
            </View>
            <RenderSeparator />
            <View style={styles.row}>
                <StyledText align='left' >Anticipo</StyledText>
                <StyledText align='right' fontWeight="bold">${element.advanceValue}</StyledText>
            </View>
            <RenderSeparator />
            <View style={styles.row}>
                <StyledText align='left'>Estado de Solicitud</StyledText>
                <View style={{
                    backgroundColor: statusStyle.backgroudColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    width: 100,
                    height: 30
                }}>
                    <StyledText align='left' style={{
                        color: statusStyle.color
                    }}>{element.state}</StyledText>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5
    },
    title: {
        fontSize: 18,
        marginLeft: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        marginVertical: 3,
        marginHorizontal: 8,
    }
});