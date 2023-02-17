import React from "react";
import { View, StyleSheet, ImageBackground, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';
import BoxFolder from '../../components/document/BoxFolder';
import HeaderTitle from "../../components/header/HeaderTitle";

const arr = [
    { id: 1, name: 'Mis Documentos' },
    { id: 2, name: 'Documentos pendientes por aprobar' }
]

export default function FolderDocumentPage() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Documentos" />
                <SafeAreaView style={styles.view}>
                    <FlatList
                        numColumns={2}
                        data={arr}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (<BoxFolder elements={item} isSubFolder={false} />)}
                    >
                    </FlatList>
                </SafeAreaView>
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
        height: '115%'
    },
    view: {
        marginTop: 20
    }
});