import React from "react";
import { View, StyleSheet, ImageBackground, ScrollView, Button, TextInput, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import HeaderTitle from "../../components/header/HeaderTitle";
import BottomToolbar from '../../components/toolbar/BottomToolbar';
import StyledText from "../../components/input/StyledText";
import DatePickerInput from "../../components/input/DatePickerInput";
import DayTakeCollapse from "../../components/vacation/DayTakeCollapse";
import RequestVacationList from "../../components/vacation/RequestVacationList";
import { PopupApproved } from "../../components/vacation/PopupApproved";


const deviceHeight = Dimensions.get('window').height - 220;

export default function VacationPage() {
    const navigation = useNavigation();
    const [progresive, setProgresive] = React.useState(0);
    const [aditional, setAditional] = React.useState(0);
    const [daysValid, setDayValid] = React.useState(60);


    let popupOptionRef = React.createRef();

    const onShowPopupOption = (itemRequest) => {
        popupOptionRef.show();
    }

    const onClosePopupOption = () => {
        popupOptionRef.close();
    }

    const onClickMenuOption = (option) => {
        popupOptionRef.close();
    }

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
                <View style={styles.view}>
                    <ScrollView style={{
                        margin: 10,
                        maxHeight: deviceHeight
                    }}>
                        <StyledText align='left' fontWeight="bold" style={{ fontSize: 15 }}>Seleccioné las fechas</StyledText>

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
                        <StyledText align='left' fontWeight="bold" style={{ fontSize: 10, marginTop: 5, color: "red", display: 'none' }}>La cantidad de días no puede ser mayor que {daysValid}</StyledText>
                        <StyledText align='left' fontWeight="bold" style={{ fontSize: 15, marginTop: 10 }}>Resumen</StyledText>
                        <DayTakeCollapse
                            days="57"
                            totalDays="100"
                            regularStartDays="10"
                            regularLimitDays="88"
                            progressiveStartDays="5"
                            progressiveLimitDays="5"
                            aditionalStartDays="0"
                            aditionalLimitDays="0"
                            incorporateDate="2023-10-12"
                        />
                        <StyledText align='left' fontWeight="bold" style={{ fontSize: 15, marginVertical: 5 }}>Solicitudes a aprobar (10)</StyledText>
                        <RequestVacationList onSelectItem={onShowPopupOption}/>
                    </ScrollView>
                    <View style={{ margin: 10 }}>
                        <Button
                            title="Solicitar"
                            color="#0F8847"
                        />
                    </View>
                </View>
                <PopupApproved
                    title="Opciones"
                    onSelectItem={onClickMenuOption}
                    ref={(target) => popupOptionRef = target}
                    onTouchOutside={onClosePopupOption}
                />
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
        marginTop: 40
    },
    image: {
        flex: 1
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


