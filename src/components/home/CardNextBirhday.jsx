import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    ScrollView
} from 'react-native';
import BoxNextBirthDay from './BoxNextBirthday';

const arr = [
    { date: '2020-12-10', name: 'Jaime', url: 'https://media.istockphoto.com/id/653844452/es/foto/hombre-maduro-relajado-de-pie-con-los-brazos-cruzados.jpg?s=2048x2048&w=is&k=20&c=1RcIooE879wjW8KESXwOiPDNT9YuwVb_ndRvinqCmus=' },
    { date: '2020-12-15', name: 'Guillermo', url: '../../../assets/images/user_empty.png' },
    { date: '2020-12-23', name: 'Claudia', url: '../../../assets/images/user_empty.png' }
]

export default function CardNextBirthDay() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal={true}>
                <FlatList
                    numColumns={20}
                    data={arr}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (<BoxNextBirthDay elements={item} />)}
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