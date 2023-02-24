import React from "react";
import { View, StyleSheet, ImageBackground, ScrollView, SafeAreaView, Dimensions } from "react-native";
import HeaderPrincipal from "../../components/header/HeaderPrincipal";
import BottomToolbar from '../../components/toolbar/BottomToolbar';
import CardHome from "../../components/home/CardHome";

const deviceHeight = Dimensions.get('window').height - 160;
export default function HomePage() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderPrincipal username="Luisa Jimenez" />
                <SafeAreaView>
                    <ScrollView style={styles.scrollView}>
                        <CardHome />
                    </ScrollView>
                </SafeAreaView>
                <BottomToolbar />
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
    },
    logo: {
        top: 10,
        width: 100,
        height: 50,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        marginHorizontal: 5,
        height: deviceHeight
    }
});