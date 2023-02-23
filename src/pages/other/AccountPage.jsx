import React from "react";
import { View, StyleSheet, ImageBackground, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomToolbar from "../../components/toolbar/BottomToolbar";
import StyledText from "../../components/input/StyledText";
import HeaderTitle from "../../components/header/HeaderTitle";

const DATA = [
    { id: 1, name: 'Mauro Jorge', lastName: 'Pomar Durruthy', email: 'mauropomardurruthy@gmail.com' }
]

const RenderSeparator = () => (
    <View
        style={{
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
            height: 1,
        }}
    />
);

const Item = ({ element }) => {
    return (
        <>
            <TouchableOpacity>
                <View style={styles.containerItem}>
                    <View style={styles.item}>
                        <StyledText fontWeight="bold" style={{ marginRight: 10 }}>Nombre</StyledText>
                        <StyledText>{element.name}</StyledText>
                    </View>
                    <RenderSeparator />
                    <View style={styles.item}>
                        <StyledText fontWeight="bold" style={{ marginRight: 10 }}>Apellido</StyledText>
                        <StyledText>{element.lastName}</StyledText>
                    </View>
                    <RenderSeparator />
                    <View style={styles.item}>
                        <StyledText fontWeight="bold" style={{ marginRight: 10 }}>Correo</StyledText>
                        <StyledText>{element.email}</StyledText>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}



export default function AccountPage() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Mi cuenta" />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={styles.userPhoto}
                        source={require('../../../assets/images/desing_girl.png')}
                    />
                </View>
                <SafeAreaView style={styles.view}>
                    <FlatList
                        data={DATA}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (<Item element={item} />)}
                    >
                    </FlatList>
                </SafeAreaView>
                <BottomToolbar />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 1
    },
    view: {
        marginTop: -90
    },
    containerItem: {
        margin: 10,
    },
    item: {
        marginVertical: 15,
    },
    userPhoto: {
        width: 150,
        height: 150,
        marginRight: 10,
        marginTop: -20,
        resizeMode: 'cover',
        textAlign: 'center'
    }
});