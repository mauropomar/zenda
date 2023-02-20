import React from "react";
import Toggle from 'react-native-toggle-input'
import { View, StyleSheet, ImageBackground, Image, Button, SafeAreaView, FlatList, TextInput, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Formik, useField } from "formik";
import HeaderTitle from "../../components/header/HeaderTitle";
import BottomToolbar from '../../components/toolbar/BottomToolbar';
import BoxTypePermission from "../../components/permission/BoxTypePermision";
import DateRangeInput from "../../components/input/DateRangeInput";
import StyledText from "../../components/input/StyledText";
import StyledTextInput from "../../components/input/StyleTextInput";


const arrTypes = [{
    id: 1,
    name: 'Administrativo',
    icon: require('../../../assets/icons/document.png')
}, {
    id: 2,
    name: 'Licencia',
    icon: require('../../../assets/icons/medicaments.png')
}]

export default function PermissionPage() {
    const navigation = useNavigation();
    const [number, onChangeNumber] = React.useState('');
    const [toggle, setToggle] = React.useState(false);
    const [comments, setComments] = React.useState("Motivos");

    const onClickStates = () => {
        navigation.navigate('PermissionState');
    }

    const onChangeComments = (text) => {
        setComments(text)
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Solicitar Permisos" linkText="Ver estados" clickStates={onClickStates} />

                <View style={styles.view}>
                    <ScrollView>
                        <SafeAreaView>
                            <FlatList
                                numColumns={2}
                                data={arrTypes}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (<BoxTypePermission elements={item} />)}
                            >
                            </FlatList>
                        </SafeAreaView>
                        <View style={styles.form}>
                            <StyledText align='left' fontWeight="bold" style={styles.select}>Selecciona</StyledText>
                            <View style={{ display: 'flex' }}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeNumber}
                                    value={number}
                                    placeholder="Horas a tomar"
                                    keyboardType="numeric"
                                />
                                <View style={styles.containerToggle}>
                                    <Toggle toggle={toggle} setToggle={setToggle} style={styles.toggle} />
                                    <StyledText align='left' style={styles.labelToggle}>Jornada Completa</StyledText>
                                </View>
                                <View style={{ margin: 10 }}>
                                    <DateRangeInput />
                                </View>
                                <TextInput
                                    editable
                                    multiline
                                    numberOfLines={4}
                                    maxLength={255}
                                    placeholder="Motivos"
                                    onChangeText={text => onChangeComments(text)}
                                    value={comments}
                                    style={{ margin: 10, padding: 10, borderColor: "black", borderWidth: 1, borderRadius: 5 }}
                                />
                                 <View style={{ margin: 10 }}>
                                <Button
                                    disabled
                                    title="Solicitar"
                                    color="#0F8847"
                                />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
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
    containerToggle: {
        flexDirection: 'row',
        marginLeft: 20
    },
    labelToggle: {
        marginLeft: 10,
        marginTop: 5
    },
    image: {
        flex: 1
    },
    view: {
        marginTop: 40
    },
    form: {
        margin: 10
    },
    select: {
        fontSize: 20,
        marginLeft: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5,
    }
});