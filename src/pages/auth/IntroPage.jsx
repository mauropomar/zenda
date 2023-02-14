import React, { useState } from "react";
import { Button, View, StyleSheet, Image, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import StyledText from "../../components/input/StyledText";


export default function IntroPage() {
    const navigation = useNavigation();

    const onShowLogin = (event) => {
        navigation.navigate("Login")
    }

    const slides = [
        {
            key: 1,
            title: 'Asistencia',
            text: 'En Zenda podrás marcar tu asistencia o revisar reportes de tu jornada laboral.',
            image: require('../../../assets/images/Paso1.png'),
            backgroundColor: 'red',
        },
        {
            key: 2,
            title: 'Revisar documentos',
            text: 'También podrás revisar tus liquidaciones y contratos como anexos.',
            image: require('../../../assets/images/Paso2.png'),
            backgroundColor: 'red',
        },
        {
            key: 3,
            title: 'Realizar solicitudes',
            text: 'O realizar solicitudes para tus merecidas vacaciones, horas extras o anticipos',
            image: require('../../../assets/images/Paso3.png'),
            backgroundColor: 'red',
        }
    ];

    const renderSlider = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} />
                <StyledText align='center' fontWeight='bold' fontSize='heading' color="black" style={styles.title}>{item.title}</StyledText>
                <StyledText align='center' fontSize='heading' color="black" style={styles.description}>{item.text}</StyledText>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <AppIntroSlider
                renderItem={renderSlider}
                data={slides}
                onDone={onShowLogin}
                activeDotStyle={styles.activeTab}
                nextLabel="Siguiente"
                prevLabel="Anterior"
            />
            <View style={styles.button}>
                <Button
                    onPress={onShowLogin}
                    title="Iniciar Sesión"
                    color="#0F8847"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F4F5',
        borderRadius: 20,
    },
    title: {
        marginTop: 20,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        margin: 5,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '95%',
        margin: 10
    },
    activeTab: {
        backgroundColor: '#0F8847'
    }
});