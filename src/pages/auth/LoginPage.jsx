import React from "react";
import { Formik, useField } from "formik";
import { Button, View, StyleSheet, ImageBackground, Image, Alert, ScrollView, Text } from "react-native";
import StyledTextInput from "../../components/input/StyleTextInput";
import { loginValidationSchema } from "../../validationSchemas/LoginSchema";
import StyledText from "../../components/input/StyledText";
import { useNavigation } from '@react-navigation/native';
import { Auth } from "aws-amplify";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
};

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
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
    navigation.navigate("HomeNavigation")
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../../../assets/images/waves_register.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.containerForm}>
          <View style={styles.containerImage}>
            <Image
              style={styles.userPhoto}
              source={require('../../../assets/images/user_photo.png')}
            />
          </View>
          <StyledText align='center' fontWeight='bold' fontSize='heading' color="blackLight" style={styles.textWelcome}>¡Bienvenido otra vez!</StyledText>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={initialValues}
            onSubmit={(values) => onLoginPress(values)}
          >
            {({ handleSubmit }) => {
              return (
                <View style={styles.form}>
                  <FormikInputValue name="email" placeholder="Correo electrónico" style={styles.input} />
                  <FormikInputValue
                    name="password"
                    placeholder="Contraseña"
                    style={styles.input}
                    secureTextEntry
                  />
                  <StyledText color='primary' fontWeight='bold' style={styles.forgotPassword} onPress={onShowForgotPassword}>¿Olvidaste tu contraseña?</StyledText>
                  <Button
                    onPress={handleSubmit}
                    title="Ingresar"
                    color="#0F8847"
                  />
                  <View style={styles.containerFooterRegister}>
                    <StyledText color='black' fontWeight='bold'>¿No tenés cuenta?</StyledText>
                    <StyledText color='primary' fontWeight='bold' onPress={onShowRegister} style={styles.hyperlinkRegister}> Registrate</StyledText>
                  </View>
                </View>
              );
            }}
          </Formik>
          <Text style={{ fontSize: 80 }}></Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerForm: {
    top: '10%',
    justifyContent: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFooterRegister: {
    marginTop: 10,
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
    marginBottom: 30
  },
  forgotPassword: {
    fontSize: 15,
    alignSelf: 'flex-end',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#DDEEDD'
  },
  userPhoto: {
    marginBottom: 20,
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5,
  },
});
