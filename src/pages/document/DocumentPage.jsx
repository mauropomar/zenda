import React, { useState } from "react";
import { Button, View, StyleSheet, ImageBackground, Image, SafeAreaView, ScrollView, FlatList, Text } from 'react-native';
import { useRoute } from "@react-navigation/native";
import ItemDocument from "../../components/document/ItemDocument";
import HeaderTitle from "../../components/header/HeaderTitle";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'okk 02/02/2023',
        url: 'https://www.africau.edu/images/default/sample.pdf',
        isSelected: false
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Testing 02/02/2023',
        url: 'https://www.africau.edu/images/default/sample.pdf',
        isSelected: false
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Finiquito 02/02/2023',
        url: 'https://www.africau.edu/images/default/sample.pdf',
        isSelected: false
    },
];

const renderSeparator = () => (
    <View
        style={{
            backgroundColor: 'black',
            height: 1,
        }}
    />
);

const DocumentPage = () => {
    const [documents, setDocuments] = useState(DATA);
    const [titleButton, setTitleButton] = useState("Descargar");
    const [visibleButton, setVisibleButton] = useState(false);
    const route = useRoute();
    const titleFolder = route?.params?.subFolder;

    const onSelectDocument = (doc, value) => {
        const elem = documents.find(item => item.id === doc.id);
        if (Object.keys(elem).length > 0) {
            elem.isSelected = value;
        }
        setDocuments(documents);
        const result = documents.filter(item => item.isSelected === true);
        setTitleButton(`Descargar (${result.length}) documento/s`);
        const visible = result.length > 0
        setVisibleButton(visible)
    }

    const biRef = {
        onSelectDocument: onSelectDocument
    }

    const onDownload = () => {

    }    

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title={titleFolder} />
                <SafeAreaView style={styles.list}>
                    <ScrollView>
                        <FlatList
                            data={documents}
                            ItemSeparatorComponent={renderSeparator}
                            renderItem={({ item }) => <ItemDocument element={item} biRef={biRef} />}
                            keyExtractor={item => item.id}
                        />
                    </ScrollView>
                    <View style={[styles.button, visibleButton ? styles.button :  styles.buttonHide]}>
                        <Button
                            onPress={onDownload}
                            title={titleButton}
                            color="#0F8847"
                        />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 6,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
    },
    image: {
        flex: 1,
    },
    button: {
        width: '95%',
        margin: 10
    },
    buttonHide:{
        display:'none'
    }
});

export default DocumentPage;