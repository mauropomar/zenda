import { Formik, useField } from "formik";
import { Button, View, StyleSheet, ImageBackground, Image, Alert } from "react-native";
import StyledText from "../../components/input/StyledText";
import StyledTextInput from "../../components/input/StyleTextInput";
import { forgotPasswordValidationSchema } from "../../validationSchemas/ForgotPasswordSchema";
import HeaderTitle from "../../components/header/HeaderTitle";
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

export default function ForgotPasswordPage() {

    const navigation = useNavigation();

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
              <HeaderTitle title="Olvide mi contraseña"/>
                <View style={styles.containerForm}>
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
        marginTop: 50,
        justifyContent: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerButton: {
        marginBottom: 10
    },
    form: {
        margin: 12,
        justifyContent: 'center',
    },
    image: {
        flex: 1
    },
    input:{
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