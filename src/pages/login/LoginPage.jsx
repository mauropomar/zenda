import React from "react";
import { Formik, useField } from "formik";
import { Button, View, StyleSheet, ImageBackground } from "react-native";
import StyledTextInput from "../../components/input/StyleTextInput";
import { loginValidationSchema } from "../../validationSchemas/LoginSchema";
import StyledText from "../../components/input/StyledText";

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
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/images/top_waves.png')} resizeMode="cover" style={styles.image}>
    
      <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>         
            <FormikInputValue name="email" placeholder="E-mail" />
            <FormikInputValue
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button
              onPress={handleSubmit}
              title="Ingresar"
              color="#0F8847"
            />
          </View>
        );
      }}
    </Formik>
    </ImageBackground> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5,
  },
  form: {
    margin: 12,
    flex: 1,
    justifyContent: 'center',
    marginTop:200
  },
  image: {
    flex: 1,
    height:'50%',
    justifyContent: 'top',
  },
});
