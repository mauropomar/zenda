import React from "react";
import { View, StyleSheet, ImageBackground, Image, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Formik, useField } from "formik";
import HeaderTitle from "../../components/header/HeaderTitle";
import BottomToolbar from '../../components/toolbar/BottomToolbar';
import StyledText from "../../components/input/StyledText";
import StyledTextInput from "../../components/input/StyleTextInput";



export default function VacationReportPage() {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Estados de vacaciones" />
                
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
    containerInfo: {
        flexDirection: 'row',
        marginTop: 50,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 10,
        marginHorizontal: 10
    },
    containerText: {
        marginVertical: 20,
        marginLeft: 15,
        flex: 1,
    },
    form: {
        marginTop: 30,
        marginHorizontal: 5,
        flex: 1,
    },
    image: {
        flex: 1
    },
    title: {
        fontSize: 24
    },
    icon: {
        marginVertical: 25,
        marginLeft: 10
    },
    containerInput: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 50,
        borderWidth: 0.6,
        borderRadius: 10,
        marginBottom: 20
    },
    textInput: {
        fontSize: 20,
        marginLeft: 10,
    },
    input: {
        width: '98%',
        marginLeft: -10
    },
    iconInput: {
        marginTop: 15,
        marginLeft: 5,
    },
    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5,
    }
});