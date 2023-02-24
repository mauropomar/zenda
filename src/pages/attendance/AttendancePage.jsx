import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import BottomToolbar from '../../components/toolbar/BottomToolbar';

export default function AttendancePage() {
    return (
        <View style={styles.container}>
            <Text>Asistencia</Text>
            <BottomToolbar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});