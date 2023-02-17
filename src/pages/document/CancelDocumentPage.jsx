import React from "react";
import { View, StyleSheet, ImageBackground, Button, TextInput } from 'react-native';
import { Formik } from "formik";
import HeaderTitle from "../../components/header/HeaderTitle";


const initialValues = {
};


export default function CancelDocumentPage() {
    const [value, setChangeText] = React.useState('');
    const [disabledButton, setDisabledButton] = React.useState(true);

    const onSend = (values) => {
         console.warn(value)
    }

    const onChangeText = (text) => {
        setChangeText(text);
        const disabled = text === "";
        setDisabledButton(disabled);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Comentario" />
                <View style={styles.containerForm}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => onSend(values)}
                    >
                        {({ handleSubmit }) => {
                            return (
                                <View style={styles.form}>
                                    <TextInput
                                        editable
                                        multiline
                                        numberOfLines={10}
                                        maxLength={255}
                                        placeholder="Motivos"
                                        onChangeText={text => onChangeText(text)}
                                        value={value}
                                        style={{ padding: 10, borderColor: "black", borderWidth: 1, marginVertical: 20 }}
                                    />
                                    <Button
                                        onPress={handleSubmit}
                                        disabled={disabledButton}
                                        title="Aceptar"
                                        color="#0F8847"
                                    />
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
    },
    containerForm: {
        flex: 1,
        marginTop:40
    },
    form: {
        margin: 12,
        justifyContent: 'center',
    },
    datepicker: {
        marginBottom: 10,
    },
    image: {
        flex: 1,
    },
    textWelcome: {
        fontSize: 24,
        marginTop: 30,
        marginLeft: 12,
        marginBottom: 10
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