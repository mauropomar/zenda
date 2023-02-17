import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BottomPopup } from '../modal/BottomPopup';
import StyledText from '../input/StyledText';

export default function BottomToolbar() {
    const navigation = useNavigation();
    let popupRef = React.createRef();
    const color = "green";

    const onSelectHome = () => {
        navigation.navigate('HomeNavigation', {
            screen: 'Home'
        });
    }

    const onSelectOther = () => {
        navigation.navigate('HomeNavigation', {
            screen: 'Others'
        });
    }

    const onSelectSettlement = () => {
        navigation.navigate('HomeNavigation', {
            screen: 'Settlement'
        });
    }

    const onSelectDocument = () => {
        navigation.navigate('HomeNavigation', {
            screen: 'FolderDocument'
        });
    }

    const onSelectOption = () => {
        popupRef.show();
    }

    const onClosePopup = () => {
        popupRef.close();
    }

    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <TouchableOpacity onPress={onSelectHome}>
                    <View style={styles.icon}>
                        <Ionicons name="home" size={24} color={color} />
                        <StyledText style={styles.text}>Inicio</StyledText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onSelectSettlement}>
                    <View style={styles.icon} >
                        <MaterialIcons name="attach-money" size={24} color={color} />
                        <StyledText style={styles.text}>Liquidación</StyledText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onSelectOption}>
                    <View style={styles.icon}>
                        <Ionicons name="add-circle" size={60} color={color} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onSelectDocument}>
                    <View style={styles.icon}>
                        <Ionicons name="folder-open" size={24} color={color} />
                        <StyledText style={styles.text}>Documentos</StyledText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onSelectOther}>
                    <View style={styles.icon}>
                        <Ionicons name="ellipsis-vertical" size={24} color={color} />
                        <StyledText style={styles.text}>Más</StyledText>
                    </View>
                </TouchableOpacity>
            </View>
            <BottomPopup
                title="Solicitar"
                ref={(target) => popupRef = target}
                onTouchOutside={onClosePopup}
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

