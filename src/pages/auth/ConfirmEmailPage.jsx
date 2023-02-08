import { Formik, useField } from "formik";
import { Button, View, StyleSheet, ImageBackground, Alert, Image } from "react-native";
import StyledText from "../../components/input/StyledText";
import StyledTextInput from "../../components/input/StyleTextInput";
import { confirmEmailValidationSchema } from "../../validationSchemas/ConfirmEmailSchema";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const initialValues = {
    email: "",
    code: "",
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

export default function ConfirmEmailPage() {
    const route = useRoute();
    initialValues.email = route?.params?.email;

    const navigation = useNavigation();
    const onShowLogin = () => {
        navigation.navigate("Login")
    }

    const onConfirmPresed = async (data) => {
        try {
            await Auth.confirmSignUp(data.email, data.code)
            navigation.navigate("HomeScreen")
        } catch (error) {
            Alert.alert('Error', e.message)
        }
    }

    const onResendPresed = async (data) => {
        try {
            await Auth.resendSignUp(data.email)
        } catch (error) {
            Alert.alert('Error', e.message)
        }
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
                    <StyledText align='left' fontWeight='bold' fontSize='heading' color="black" style={styles.textWelcome}>Confirme su correo</StyledText>
                    <Formik
                        validationSchema={confirmEmailValidationSchema}
                        initialValues={initialValues}
                        onSubmit={(values) => onConfirmPresed(values)}
                    >
                        {({ handleSubmit }) => {
                            return (
                                <View style={styles.form}>
                                    <FormikInputValue name="email" placeholder="Correo electrónico" />
                                    <FormikInputValue
                                        name="code"
                                        placeholder="Introduzca su código de confirmación"
                                    />
                                    <View style={styles.containerButtonConfirm}>
                                        <Button
                                            onPress={handleSubmit}
                                            title="Confirmar"
                                            color="#0F8847"
                                        />
                                    </View>
                                    <View>
                                        <Button
                                            onPress={handleSubmit}
                                            title="Reenviar Código"
                                            color="#000000"
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
        justifyContent: 'center',
    },
    containerBackSign: {
        marginTop: 30,
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
    textWelcome: {
        fontSize: 24,
        marginTop: 60,
        marginLeft: 12,
        marginBottom: 30
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