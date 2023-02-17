import React from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import HeaderPrincipal from "../../components/header/HeaderPrincipal";
import CardHome from "../../components/home/CardHome";


export default function HomePage() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderPrincipal username="Luisa Jimenez" />
                <ScrollView>
                    <CardHome />                   
                </ScrollView>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        height: '110%'
    },
    logo: {
        top: 10,
        width: 100,
        height: 50,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
});