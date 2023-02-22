import React from "react";
import { View, StyleSheet, ImageBackground, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StyledText from "../../components/input/StyledText";
import HeaderAccount from "../../components/header/HeaderAccount";

const DATA = [
    { id: 1, name: 'Mi cuenta', description: 'Información General', icon: require('../../../assets/icons/person.png') },
    { id: 2, name: 'Estados de solicitudes', description: 'Revisar solictudes enviadas', icon: require('../../../assets/icons/states.png')  },
    { id: 3, name: 'Configuración', description: 'Configura tu app Zenda', icon: require('../../../assets/icons/config.png') },
    { id: 4, name: 'Ayuda', description: 'Centro de ayuda, contáctenos y privacidad', icon: require('../../../assets/icons/help.png') }
]


const ItemMenu = ({ element }) => {
    return (
        <>
            <TouchableOpacity>
                <View style={styles.item}>
                    <View style={styles.icon}>
                    <Image source={element.icon}
                    style={styles.icon} />
                    </View>
                    <View>
                        <StyledText fontWeight="bold" style={{ marginRight: 10 }}>{element.name}</StyledText>
                        <StyledText>{element.description}</StyledText>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

const renderSeparator = () => (
    <View
        style={{
            backgroundColor: 'black',
            justifyContent:'center',
            alignItems:'center',
            marginHorizontal: 15,
            height: 1,
        }}
    />
);


export default function OtherOptionPage() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderAccount username="Luisa Jimenez" email="icedeno@gmail.com" />
                <SafeAreaView style={styles.view}>
                    <FlatList
                        data={DATA}
                        ItemSeparatorComponent={renderSeparator}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (<ItemMenu element={item} />)}
                    >
                    </FlatList>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1
    },
    view: {
        marginTop: 20
    },
    item: {
        flex: 1,
        height: 50,
        marginVertical:3,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    icon:{
        marginVertical:6,
        marginHorizontal:10
    }
});