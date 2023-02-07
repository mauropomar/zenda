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
            <ImageBackground source={require('../../../assets/images/waves_register.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.containerForm}>
                    <View style={styles.containerImage}>
                        <Image
                            style={styles.userPhoto}
                            source={require('../../../assets/images/user_empty.png')}
                        />
                    </View>
                    <View style={styles.containerWelcome}>
                        <StyledText color='blackLight' fontWeight='bold' style={styles.textWelcome}>Crea una cuenta</StyledText>
                        <StyledText color='primary' fontWeight='bold' style={styles.textWelcome}> gratis</StyledText>
                    </View>
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
        top: '10%',
        justifyContent: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerWelcome: {
        marginTop: 20,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
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
        height: '50%',
    },
    textWelcome: {
        fontSize: 24,
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
