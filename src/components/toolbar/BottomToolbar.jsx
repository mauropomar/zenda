import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GlobalUtil from '../../utils/global';
import { BottomPopup } from '../modal/BottomPopup';
import StyledText from '../input/StyledText';


const ToolbarOthers = (props) => {
    return (
        <View style={styles.toolbar}>
            <TouchableOpacity onPress={props.onSelectHome}>
                <View style={styles.icon}>
                    <Ionicons name="home-outline" size={24} color={props.color} />
                    <StyledText style={styles.text}>Inicio</StyledText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onSelectOption}>
                <View style={styles.icon}>
                    <Ionicons name="add-circle" size={60} color={props.color} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onSelectOther}>
                <View style={styles.icon}>
                    <Ionicons name="ellipsis-vertical" size={24} color={props.color} />
                    <StyledText style={styles.text}>Más</StyledText>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const ToolbarChile = (props) => {
    return (
        <View style={styles.toolbar}>
            <TouchableOpacity onPress={props.onSelectHome}>
                <View style={styles.icon}>
                    <Ionicons name="home-outline" size={24} color={props.color} />
                    <StyledText style={styles.text}>Inicio</StyledText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onSelectRequest}>
                <View style={styles.icon} >
                    <FontAwesome5 name="calendar-check" size={24} color={props.color} />
                    <StyledText style={styles.text}>Solicitudes</StyledText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onSelectOption}>
                <View style={styles.icon}>
                    <Ionicons name="add-circle" size={60} color={props.color} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onSelectDocument}>
                <View style={styles.icon}>
                <MaterialCommunityIcons name="folder-account-outline" size={24} color={props.color} />
                    <StyledText style={styles.text}>Documentos</StyledText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onSelectOther}>
                <View style={styles.icon}>
                    <Ionicons name="ellipsis-vertical" size={24} color={props.color} />
                    <StyledText style={styles.text}>Más</StyledText>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default function BottomToolbar() {
    let Toolbar = ToolbarChile;
    let popupRef = React.createRef();
    const navigation = useNavigation();
    const color = "green";

    const onSelectHome = () => {
        navigation.navigate('Home');
    }

    const onSelectOther = () => {
        navigation.navigate('Others');
    }

    const onSelectSettlement = () => {
        navigation.navigate('Settlement');
    }

    const onSelectDocument = () => {
        navigation.navigate('FolderDocument');
    }

    const onSelectRequest = () => {
        navigation.navigate('StateRequest');
    }

    const onSelectOption = () => {
        popupRef.show();
    }
    const onClosePopup = () => {
        popupRef.close();
    }

    if (GlobalUtil.countrie === 'CHILE') {
        Toolbar = ToolbarChile;
    } else {
        if (GlobalUtil.countrie === 'PERU' || GlobalUtil.countrie === 'COLOMBIA') {
            Toolbar = ToolbarOthers;
        } 
    }

    return (
        <View style={styles.container}>
            <Toolbar
                onSelectHome={onSelectHome}
                onSelectOther={onSelectOther}
                onSelectOption={onSelectOption}
                onSelectRequest={onSelectRequest}
                onSelectSettlement={onSelectSettlement}
                onSelectDocument={onSelectDocument}
                color={color}
            />
            <BottomPopup
                title="Solicitar"
                ref={(target) => popupRef = target}
                onTouchOutside={onClosePopup}
                navigation={navigation}
            >
            </BottomPopup>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        height: 60
    },
    toolbar: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingRight: 10
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});

