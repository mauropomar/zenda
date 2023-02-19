import React from "react";
import { View, StyleSheet, ImageBackground, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';
import BoxBirthDay from '../../components/birthday/BoxBirthday';
import HeaderTitle from "../../components/header/HeaderTitle";
import BottomToolbar from '../../components/toolbar/BottomToolbar';

const arr = [
    { date: '2020-12-10', name: 'Jaime', url: require('../../../assets/images/user2.png') },
    { date: '2020-12-15', name: 'Guillermo', url: require('../../../assets/images/user1.png') },
    { date: '2020-12-23', name: 'Claudia', url: require('../../../assets/images/user_empty.png') },
    { date: '2020-12-10', name: 'Luisa', url: require('../../../assets/images/desing_girl.png') }
]

export default function BirthDayPage() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Próximos cumpleaños" />
                <SafeAreaView style={styles.view}>
                    <ScrollView>
                        <FlatList
                            numColumns={3}
                            data={arr}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (<BoxBirthDay elements={item} />)}
                        >
                        </FlatList>
                    </ScrollView>
                </SafeAreaView>
                <BottomToolbar/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    view:{
       marginTop: 40,
       flex: 1,
    },
    image: {
        flex: 1
    },
    title: {
        fontSize: 24
    }
});