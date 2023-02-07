import { Formik, useField } from "formik";
import { Button, View, StyleSheet, ImageBackground, Image, Alert } from "react-native";
import StyledText from "../../components/input/StyledText";
import StyledTextInput from "../../components/input/StyleTextInput";
import { forgotPasswordValidationSchema } from "../../validationSchemas/ForgotPasswordSchema";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const initialValues = {
    email: "",
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

export default function ForgotPasswordPage() {

    const navigation = useNavigation();

    const onShowLogin = () => {
        navigation.navigate("Login")
    }

    const onSendPresed = async (data) => {
        navigation.navigate("ResetPassword", { email: data.email });
        /*  try {
              await Auth.forgotPassword(data.email)
              navigation.navigate("ResetPassword");
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
                    <StyledText align='left' fontWeight='bold' fontSize='heading' color="black" style={styles.textWelcome}>Recuperar contraseña</StyledText>
                    <Formik
                        validationSchema={forgotPasswordValidationSchema}
                        initialValues={initialValues}
                        onSubmit={(values) => onSendPresed(values)}
                    >
                        {({ handleSubmit }) => {
                            return (
                                <View style={styles.form}>
                                    <FormikInputValue name="email" placeholder="Correo electrónico" />
                                    <View style={styles.containerButton}>
                                        <Button
                                            onPress={handleSubmit}
                                            title="Enviar"
                                            color="#0F8847"
                                        />
                                    </View>
                                    <View style={styles.containerBackSign}>
                                        <StyledText color='black' fontWeight='bold' onPress={onShowLogin}>Volver para iniciar sesión</StyledText>
                                    </View>
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
        justifyContent: 'center',
    },
    containerForm: {
        top: '10%',
        justifyContent: 'center',
    },
    containerBackSign: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerButton: {
        marginBottom: 10
    },
    textWelcome: {
        fontSize: 24,
        marginBottom: 30,
        marginLeft: 12
    },
    form: {
        margin: 12,
        justifyContent: 'center',
    },
    image: {
        flex: 1
    },
    logo: {
        top: 10,
        width: 100,
        height: 50,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5,
    },
});