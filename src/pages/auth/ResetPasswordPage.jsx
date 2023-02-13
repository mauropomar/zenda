import { Formik, useField } from "formik";
import { Button, View, StyleSheet, ImageBackground, Alert, Image } from "react-native";
import StyledText from "../../components/input/StyledText";
import StyledTextInput from "../../components/input/StyleTextInput";
import HeaderTitle from "../../components/header/HeaderTitle";
import { resetPasswordValidationSchema } from "../../validationSchemas/ResetPasswordSchema";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const initialValues = {
    email: "",
    code: "",
    password: ""
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

export default function ResetPasswordPage() {
    const route = useRoute();
    initialValues.email = route?.params?.email;

    const navigation = useNavigation();
    const onShowLogin = () => {
        navigation.navigate("Login")
    }

    const onResetPresed = async (data) => {
        /*  try {
              await Auth.forgotPasswordSubmit(data.email, data.code, data.password)
              navigation.navigate("Login")
          } catch (error) {
              Alert.alert('Error', e.message)
          }*/
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/top_waves.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.containerForm}>
                    <StyledText align='center' fontWeight='bold' fontSize='heading' color="blackLight" style={styles.textWelcome}>Olvide mi contraseña</StyledText>

                    <Formik
                        validationSchema={resetPasswordValidationSchema}
                        initialValues={initialValues}
                        onSubmit={(values) => onResetPresed(values)}
                    >
                        {({ handleSubmit }) => {
                            return (
                                <View style={styles.form}>
                                    <FormikInputValue name="email" placeholder="Correo electrónico" />
                                    <FormikInputValue
                                        name="code"
                                        placeholder="Introduzca su código de confirmación"
                                    />
                                    <FormikInputValue
                                        name="password"
                                        placeholder="Contraseña"
                                        secureTextEntry
                                    />
                                    <View style={styles.containerButtonConfirm}>
                                        <Button
                                            onPress={handleSubmit}
                                            title="Enviar código de recuperación"
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
        top: '40%',
        justifyContent: 'center',
    },
    containerBackSign: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    containerButtonConfirm: {
        marginBottom: 10
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        margin: 12,
        justifyContent: 'center',
    },
    textWelcome: {
        fontSize: 24,
        marginBottom: 30
    },
    image: {
        flex: 1,
        height: '50%',
    },
    input: {
        backgroundColor: '#DDEEDD'
    },
    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5,
    },
});