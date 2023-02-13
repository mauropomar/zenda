import React from "react";
import { View, StyleSheet, ImageBackground, Button } from 'react-native';
import { Formik, useField } from "formik";
import DatePickerInput from "../../components/input/DatePickerInput";
import { loginValidationSchema } from "../../validationSchemas/LoginSchema";
import StyledTextInput from "../../components/input/StyleTextInput";
import StyledText from "../../components/input/StyledText";
import HeaderTitle from "../../components/header/HeaderTitle";


const initialValues = {
    email: "",
    password: "",
};
const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    return (
        <>
            <StyledTextInput
                error={meta.error}
                value={field.value}
                onChangeText={(value) => helpers.setValue(value)}
                style={styles.input}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    );
};

export default function SettlementPage() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Solicita liquidación por correo" />
                <View style={styles.containerForm}>
                    <StyledText color='black' align='left' fontWeight='bold' fontSize='heading' style={styles.textWelcome}>Selecciona</StyledText>
                    <Formik
                        validationSchema={loginValidationSchema}
                        initialValues={initialValues}
                        onSubmit={(values) => onLoginPress(values)}
                    >
                        {({ handleSubmit }) => {
                            return (
                                <View style={styles.form}>
                                    <View style={styles.datepicker}>
                                    <DatePickerInput />
                                    </View>
                                    <Button
                                        onPress={handleSubmit}
                                        title="Solicitar"
                                        color="#0F8847"
                                    />
                                </View>
                            );
                        }}
                    </Formik>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerForm: {
        flex: 1,
    },
    form: {
        margin: 12,
        justifyContent: 'center',
    },
    datepicker:{
      marginBottom: 10,
    },
    image: {
        flex: 1,
        height: '115%'
    },
    textWelcome: {
        fontSize: 24,
        marginTop: 30,
        marginLeft: 12,
        marginBottom: 10
    },
    input: {
        borderColor: '#000000',
        borderWidth: 1,
    },
    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5,
    }
});