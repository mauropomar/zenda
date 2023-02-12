import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    ScrollView
} from 'react-native';
import BoxNextBirthDay from './BoxNextBirthday';

const arr = [
    { date: '2020-12-10', name: 'Jaime', url: require('../../../assets/images/user2.png') },
    { date: '2020-12-15', name: 'Guillermo', url: require('../../../assets/images/user1.png') },
    { date: '2020-12-23', name: 'Claudia', url: require('../../../assets/images/user_empty.png') }
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