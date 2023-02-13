import { Formik, useField } from "formik";
import { Button, View, StyleSheet, ImageBackground, Alert } from "react-native";
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
                style={styles.input}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    );
};

export default function ResetPasswordPage() {

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
            <ImageBackground source={require('../../../assets/images/top_waves.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.containerForm}>
                    <StyledText align='center' fontWeight='bold' fontSize='heading' color="blackLight" style={styles.textWelcome}>Olvide mi contraseña</StyledText>
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
        top: '40%',
        justifyContent: 'center',
    },
    containerBackSign: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    containerButton: {
        marginBottom: 10
    },
    textWelcome: {
        fontSize: 24,
        marginBottom: 30
    },
    form: {
        margin: 12,
        justifyContent: 'center',
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