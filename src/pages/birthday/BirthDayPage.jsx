import React from "react";
import { View, StyleSheet, ImageBackground, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';
import DateUtil from "../../utils/date";
import HeaderTitle from "../../components/header/HeaderTitle";
import BottomToolbar from '../../components/toolbar/BottomToolbar';
import StyledText from "../../components/input/StyledText";

const arr = [
    { date: '2020-12-10', name: 'Jaime', url: require('../../../assets/images/user2.png') },
    { date: '2020-12-15', name: 'Guillermo', url: require('../../../assets/images/user1.png') },
    { date: '2020-12-23', name: 'Claudia', url: require('../../../assets/images/user_empty.png') },
    { date: '2020-12-10', name: 'Luisa', url: require('../../../assets/images/desing_girl.png') }
]

const BoxBirthDay = ({element}) => {
    const { name, url, date } = element;
    const dateStr = DateUtil.formatDateDayMonth(new Date(date));
    return (
        <View style={styles.box}>
            <Image source={url}
                style={styles.photo} />
            <StyledText align='left' fontWeight='bold'>{name}</StyledText>
            <StyledText align='left'>{dateStr}</StyledText>
        </View>
    )
}

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
                            renderItem={({ item }) => (<BoxBirthDay element={item} />)}
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
        justifyContent:'center',
    },
    view:{
       marginTop: 50
    },
    image: {
        flex: 1
    },
    title: {
        fontSize: 24
    },
    box: {
        width: '30%',
        height:150,
        backgroundColor: '#FBFCFC',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        borderRadius: 10,
        elevation: 8,
        margin: 5,
        padding: 15
    },
    photo: {
        maxHeight: 70,
        maxWidth: 70
    }
});