import React from "react";
import { View, StyleSheet, ImageBackground, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { useRoute } from "@react-navigation/native";
import HeaderTitle from "../../components/header/HeaderTitle";

export default function DocumentPage() {
    const route = useRoute();
    const title = route?.params?.subFolder;
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title={title} />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    view: {
        marginTop: 20
    }
});