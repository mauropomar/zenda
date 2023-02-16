import React from "react";
import { View, StyleSheet, ImageBackground, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { useRoute } from "@react-navigation/native";
import BoxFolder from '../../components/document/BoxFolder';
import HeaderTitle from "../../components/header/HeaderTitle";

const arr = [
    { id: 1, name: 'Finiquito' },
    { id: 2, name: 'Liquidaciones' },
    { id: 3, name: 'Contrato' },
    { id: 4, name: 'Pañales' },
    { id: 5, name: 'Anexos' },
]

export default function SubFolderDocumentPage() {
    const route = useRoute();
    const title = route?.params?.folder;
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title={title} />
                <SafeAreaView style={styles.view}>
                    <ScrollView>
                        <FlatList
                            numColumns={2}
                            data={arr}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (<BoxFolder elements={item} isSubFolder={true} />)}
                        >
                        </FlatList>
                    </ScrollView>
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
    },
    view: {
        marginTop: 10
    }
});