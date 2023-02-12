import React from "react";
import { View, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import HeaderTitle from "../../components/header/HeaderTitle";

export default function SettlementPage() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Solicitar liquidación por correo" />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        marginTop: 10
    },
    image: {
        flex: 1,
        height: '115%'
    }
});