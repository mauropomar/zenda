import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native';
import ItemRequestVacation from "./ItemRequestVacation";
import SearchInput from '../input/SearchInput'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        rut: '14.822.702-1',
        name: 'Isabel Cedeno Pupo',
        startDate: '2023-01-09',
        endDate: '2023-01-19'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        rut: '84.822.702-1',
        name: 'Mauro Jorge Pomar Durruthy',
        startDate: '2023-02-22',
        endDate: '2023-03-21'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        rut: '16.824.702-1',
        name: 'Isabel Cedeno Pupo',
        startDate: '2023-01-08',
        endDate: '2023-01-19'
    },
];

export default function RequestVacationList({onSelectItem}) {
    const onSearch = (text) => {

    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View>
                    <SearchInput placeHolder="Buscar..." searchEvent={onSearch} />
                </View>
                <ScrollView>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <ItemRequestVacation element={item} selectEvent = {onSelectItem}/>}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1
    },
});