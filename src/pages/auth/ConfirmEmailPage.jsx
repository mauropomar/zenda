import { Formik, useField } from "formik";
import { Button, View, StyleSheet, ImageBackground } from "react-native";
import StyledText from "../../components/input/StyledText";
import StyledTextInput from "../../components/input/StyleTextInput";
import { confirmEmailValidationSchema } from "../../validationSchemas/ConfirmEmail";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";

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
    const onShowLogin = (event) => {
        navigation.navigate("Login")
    }
    const onConfirmPresed = (data) => {
        console.log(data);
        navigation.navigate("Register")
    }
    const onResendPresed = (data) => {
        console.log(data);
        navigation.navigate("Login")
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/top_waves.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.containerForm}>
                    <StyledText align='center' fontWeight='bold' fontSize='heading' color="blackLight" style={styles.textWelcome}>Confirme su correo</StyledText>
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
                                            onPress={onResendPresed(initialValues)}
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
        top: '40%',
        justifyContent: 'center',
    },
    containerBackSign: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    containerButtonConfirm:{
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
    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5,
    },
});