import React from "react";
import { View, StyleSheet, ImageBackground, Image, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik, useField } from "formik";
import { advanceValidationSchema } from "../../validationSchemas/AdvanceSchema";
import HeaderTitle from "../../components/header/HeaderTitle";
import BottomToolbar from '../../components/toolbar/BottomToolbar';
import StyledText from "../../components/input/StyledText";
import StyledTextInput from "../../components/input/StyleTextInput";


const initialValues = {
    value: 0.00
};

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    return (
        <>
            <View style={styles.containerInput}>
                <View style={styles.iconInput}>
                    <MaterialIcons name="attach-money" size={24}/>
                </View>
                <View style={styles.input}>
                    <StyledTextInput
                        error={meta.error}
                        value={field.value}
                        onChangeText={(value) => helpers.setValue(value)}
                        {...props}
                    />
                </View>
            </View>
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    );
};

export default function AdvancePage() {
    const title = 'Cerrado el proceso de solicitar anticipo';
    const description = 'A partir del 01/08/2023 se podrá volver a solicitar anticipos';

    const onSubmitValue = (values) => {
       console.warn(values) 
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Solicitar Anticipo" />
                <View style={styles.containerInfo}>
                    <Image source={require('../../../assets/icons/info_black.png')}
                        style={styles.icon} />
                    <View style={styles.containerText}>
                        <StyledText align='left' fontWeight='bold'>{title}</StyledText>
                        <StyledText align='left'>{description}</StyledText>
                    </View>
                </View>
                <View style={styles.form}>
                    <StyledText align='left' fontWeight='bold' style={styles.textInput}>Especifique la cantidad*</StyledText>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => onSubmitValue(values)}
                        validationSchema={advanceValidationSchema}
                    >
                        {({ handleSubmit }) => {
                            return (
                                <View style={styles.form}>
                                    <FormikInputValue name="value" placeholder="Anticipo" style={styles.input} />
                                    <View>
                                        <Button
                                            onPress={handleSubmit}
                                            title="Solictar"
                                            color="#0F8847"
                                        />
                                    </View>
                                </View>
                            );
                        }}
                    </Formik>
                </View>
                <BottomToolbar />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    containerInfo: {
        flexDirection: 'row',
        marginTop: 50,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 10,
        marginHorizontal: 10
    },
    containerText: {
        marginVertical: 20,
        marginLeft: 15,
        flex: 1,
    },
    form: {
        marginTop: 30,
        marginHorizontal: 5,
        flex: 1,
    },
    image: {
        flex: 1
    },
    title: {
        fontSize: 24
    },
    icon: {
        marginVertical: 25,
        marginLeft: 10
    },
    containerInput: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        height: 50,
        borderWidth: 0.6,
        borderRadius: 10,
        marginBottom: 20
    },
    textInput: {
      fontSize:20, 
      marginLeft:10,
    },
    input: {
       width:'98%',
       marginLeft:-10
    },
    iconInput: {
        marginTop: 15,
        marginLeft: 5,
    },
    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5,
      }
});


