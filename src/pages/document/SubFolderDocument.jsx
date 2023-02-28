import React from "react";
import { View, StyleSheet, ImageBackground, Image, SafeAreaView, FlatList, ScrollView, Dimensions } from 'react-native';
import { useRoute } from "@react-navigation/native";
import BoxFolder from '../../components/document/BoxFolder';
import HeaderTitle from "../../components/header/HeaderTitle";
import BottomToolbar from "../../components/toolbar/BottomToolbar";

const arr = [
    { id: 1, name: 'Finiquito' },
    { id: 2, name: 'Liquidaciones' },
    { id: 3, name: 'Contrato' },
    { id: 4, name: 'Pañales' },
    { id: 5, name: 'Firmas Digitales' },
    { id: 6, name: 'Aprobaciones de Cheques' },
    { id: 6, name: 'Anexos 90' }
]

const deviceHeight = Dimensions.get('window').height - 160;

export default function SubFolderDocumentPage() {
    const route = useRoute();
    const title = route?.params?.folder;
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title={title} />
                <SafeAreaView>
                    <ScrollView style={styles.scrollView}>
                        <FlatList
                            numColumns={2}
                            data={arr}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (<BoxFolder elements={item} isSubFolder={true} />)}
                        >
                        </FlatList>
                    </ScrollView>

                </SafeAreaView>
                <BottomToolbar />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
    },
    scrollView: {
        marginTop: 40,
        marginHorizontal: 5,
        height: deviceHeight
    }
});