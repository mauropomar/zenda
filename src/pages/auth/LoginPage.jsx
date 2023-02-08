import React from "react";
import { Formik, useField } from "formik";
import { Button, View, StyleSheet, ImageBackground, Image } from "react-native";
import StyledTextInput from "../../components/input/StyleTextInput";
import { loginValidationSchema } from "../../validationSchemas/LoginSchema";
import StyledText from "../../components/input/StyledText";
import { useNavigation } from '@react-navigation/native';


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

export default function LoginPage() {
  const navigation = useNavigation();
  const onShowRegister = (event) => {
    navigation.navigate("Register")
  }

  const onShowForgotPassword = (event) => {
    navigation.navigate("ForgotPassword")
  }

  const onLoginPress = (event) => {
    navigation.navigate("HomeScreen")
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
          <StyledText color='black' align='left' fontWeight='bold' fontSize='heading' style={styles.textWelcome}>Iniciar sesión</StyledText>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={initialValues}
            onSubmit={(values) => onLoginPress(values)}
          >
            {({ handleSubmit }) => {
              return (
                <View style={styles.form}>
                  <FormikInputValue name="email" placeholder="Correo electrónico" />
                  <FormikInputValue
                    name="password"
                    placeholder="Contraseña"
                    secureTextEntry
                  />
                  <StyledText color='primary' fontWeight='bold' style={styles.forgotPassword} onPress={onShowForgotPassword}>Olvidaste tu contraseña?</StyledText>
                  <Button
                    onPress={handleSubmit}
                    title="Ingresar"
                    color="#0F8847"
                  />
                  <View style={styles.containerRegister}>
                    <StyledText color='black' fontWeight='bold'>No tenés cuenta?</StyledText>
                    <StyledText color='primary' fontWeight='bold' onPress={onShowRegister}> Registrate</StyledText>
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
  containerRegister: {
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
  forgotPassword: {
    fontSize: 15,
    alignSelf: 'flex-end',
    marginBottom: 40
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
