import React from "react";
import { Formik, useField } from "formik";
import { Button, View, StyleSheet, ImageBackground, Image, Alert } from "react-native";
import StyledTextInput from "../../components/input/StyleTextInput";
import { registerValidationSchema } from "../../validationSchemas/RegisterSchema";
import StyledText from "../../components/input/StyledText";
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
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    );
};


export default function RegisterPage() {
    const navigation = useNavigation();

    const onShowLogin = (event) => {
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
                <View style={styles.containerImage}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/images/logo_header.png')}
                    />
                </View>
                <View style={styles.containerForm}>
                    <StyledText color='black' align='left' fontWeight='bold' style={styles.textWelcome}>Crea una cuenta</StyledText>

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
                                    <View style={styles.containerSesion}>
                                        <StyledText color='blackLight' fontWeight='bold' >Ya eres usuario?</StyledText>
                                        <StyledText color='primary' fontWeight='bold' onPress={onShowLogin}> Iniciar sesión</StyledText>
                                    </View>
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
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerSesion: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    form: {
        margin: 12,
        justifyContent: 'center',
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
    textWelcome: {
        fontSize: 24,
        marginTop: 60,
        marginLeft: 12,
        marginBottom: 20
    },
    textSesion: {
        fontSize: 16,
    },
    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5,
    },
});
