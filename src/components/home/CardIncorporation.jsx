import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    ScrollView
} from 'react-native';

import BoxIncorporation from './BoxIncorporation';

const arr = [
    { post: 'Ejecutivo', name: 'Raquel', url: require('../../../assets/images/desing_girl.png') },
    { post: 'Desarrollador', name: 'Fabiana', url: require('../../../assets/images/fabiana.jpg') },
    { post: 'Económico', name: 'Jessica', url: require('../../../assets/images/jessica.jpg') },
    { post: 'Tester', name: 'Ricardo', url: require('../../../assets/images/ricardo.jpg') }
]

export default function CardIncorporation() {      
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal={true}>
                <FlatList
                    numColumns={20}
                    data={arr}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<BoxIncorporation elements={item} />)}
                >
                </FlatList>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});