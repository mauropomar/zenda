import React from "react";
import { StatusBar, View, StyleSheet, ImageBackground, Image, SafeAreaView, ScrollView, FlatList, Text } from 'react-native';
import { useRoute } from "@react-navigation/native";
import ItemDocument from "../../components/document/ItemDocument";
import HeaderTitle from "../../components/header/HeaderTitle";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'ok 02/02/2023',
        url: 'https://www.africau.edu/images/default/sample.pdf'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Testing 02/02/2023',
        url: 'https://www.africau.edu/images/default/sample.pdf'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Finiquito 02/02/2023',
        url: 'https://www.africau.edu/images/default/sample.pdf'
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
    const route = useRoute();
    const titleFolder = route?.params?.subFolder;
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title={titleFolder} />
                <SafeAreaView style={styles.list}>
                    <ScrollView>
                        <FlatList
                            data={DATA}
                            ItemSeparatorComponent={renderSeparator}
                            renderItem={({ item }) => <ItemDocument element={item} />}
                            keyExtractor={item => item.id}
                        />
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
    }
});

export default DocumentPage;