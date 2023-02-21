import React from "react";
import { View, StyleSheet, ImageBackground, ScrollView, Image, Button, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Formik, useField } from "formik";
import HeaderTitle from "../../components/header/HeaderTitle";
import BottomToolbar from '../../components/toolbar/BottomToolbar';
import StyledText from "../../components/input/StyledText";
import DatePickerInput from "../../components/input/DatePickerInput";
import StyledTextInput from "../../components/input/StyleTextInput";



export default function VacationPage() {
    const navigation = useNavigation();
    const [progresive, setProgresive] = React.useState(0);
    const [aditional, setAditional] = React.useState(0);

    const onViewReport = () => {
        navigation.navigate('VacationReport');
    }

    const onChangePregresive = (value) => {
        value = value.replace(/[^0-9]/g, '');
        setProgresive(value);
    }

    const onChangeAditional = (value) => {
        value = value.replace(/[^0-9]/g, '');
        setAditional(value);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Solicitar Vacaciones" linkText="Ver reportes" clickStates={onViewReport} />
                <ScrollView style={styles.view}>
                    <StyledText align='center' fontWeight="bold" style={styles.title}>Seleccioné las fechas</StyledText>
                    <View style={styles.form}>
                        <View style={styles.fieldDate}>
                            <DatePickerInput format="DD/MM/YY" placeHolder="Fecha Inicio" />
                        </View>
                        <View style={styles.fieldDate}>
                            <DatePickerInput format="DD/MM/YY" placeHolder="Fecha Fin" />
                        </View>
                        <View style={styles.containerDay}>
                            <TextInput
                                style={styles.progressive}
                                onChangeText={onChangePregresive}
                                value={progresive}
                                placeholder="Días progresivos"
                                keyboardType="numeric"
                            />
                            <TextInput
                                style={styles.aditional}
                                onChangeText={onChangeAditional}
                                value={aditional}
                                placeholder="Días adicionales"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                </ScrollView>
                <BottomToolbar />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    containerDay: {
        flexDirection: 'row'
    },
    view: {
        flex: 1,
        marginTop: 50
    },
    form: {
        margin: 10
    },
    image: {
        flex: 1
    },
    title: {
        fontSize: 24
    },
    fieldDate: {
        marginVertical: 10
    },
    progressive: {
        width: '49%',
        marginRight: 8,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    },
    aditional: {
        width: '49%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    }
});


