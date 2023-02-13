import React from "react";
import { Formik, useField } from "formik";
import { Button, View, StyleSheet, ImageBackground, Image, Alert, TouchableOpacity } from "react-native";
import StyledTextInput from "../../components/input/StyleTextInput";
import HeaderTitle from "../../components/header/HeaderTitle";
import StyledText from "../../components/input/StyledText";
import { registerValidationSchema } from "../../validationSchemas/RegisterSchema";

import { useNavigation } from '@react-navigation/native';
import { Auth } from "aws-amplify";

const initialValues = {
    name: "",
    lastName: "",
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


export default function RegisterPage() {
    const navigation = useNavigation();

    const onBack = (event) => {
        navigation.navigate("Login")
    }

    const onRegisterPressed = async (data) => {
        console.log(data);
        const { username, name, lastName, password, email } = data;
        navigation.navigate("ConfirmEmail", { email: email });
        /* 
         try {
             const response = await Auth.signUp({
                 username,
                 password,
                 atributes: { email, name, preferred_username: username }
             });
             console.log(response);
             navigation.navigate("ConfirmEmail")
         } catch (error) {
             Alert.alert('Error', e.message)
         }*/
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Crea una cuenta"/>
                <View style={styles.containerForm}>
                    <Formik
                        validationSchema={registerValidationSchema}
                        initialValues={initialValues}
                        onSubmit={(values) => onRegisterPressed(values)}
                    >
                        {({ handleSubmit }) => {
                            return (
                                <View style={styles.form}>
                                    <FormikInputValue name="name" placeholder="Nombre" />
                                    <FormikInputValue name="lastName" placeholder="Apellidos" />
                                    <FormikInputValue name="email" placeholder="Correo electrónico" />
                                    <FormikInputValue name="phoneNumber" placeholder="Teléfono" />
                                    <FormikInputValue
                                        name="password"
                                        placeholder="Contraseña"
                                        secureTextEntry
                                    />
                                    <FormikInputValue
                                        name="confirmpassword"
                                        placeholder="Repetir Contraseña"
                                        secureTextEntry
                                    />
                                    <Button
                                        onPress={handleSubmit}
                                        title="Aceptar"
                                        color="#0F8847"
                                    />
                                </View>

                            );
                        }}
                    </Formik>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    containerForm: {
        justifyContent: 'center',
        marginTop: 30
    },
    form: {
        margin: 12,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
    },
    arrow: {
        width: 20,
        height: 20,
        marginTop: 8,
        marginRight: 10,
        resizeMode: 'cover',
        alignItems: 'center',
    },
    textWelcome: {
        color: '#FFFFFF',
        fontSize: 24,
    },
    textSesion: {
        fontSize: 16,
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
    },
});
