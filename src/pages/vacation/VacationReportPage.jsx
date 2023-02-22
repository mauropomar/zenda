import React from "react";
import { View, StyleSheet, ImageBackground, SafeAreaView, ScrollView, FlatList, Dimensions } from 'react-native';
import HeaderTitle from "../../components/header/HeaderTitle";
import BottomToolbar from '../../components/toolbar/BottomToolbar';
import ItemVacationReport from "../../components/vacation/ItemVacationReport";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        dateRequest: '2023-02-09',
        daysAditional:3,
        daysRegular: 2,
        daysArt68: 3,
        startDate:'2023-02-09',
        endDate:'2023-02-19',
        state: 'Aprobado'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        dateRequest: '2023-04-19',
        daysAditional:13,
        daysRegular: 5,
        daysArt68: 3,
        startDate:'2023-02-10',
        endDate:'2023-04-19',
        state: 'Rechazado'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        dateRequest: '2023-07-20',
        daysAditional:3,
        daysRegular: 12,
        daysArt68: 7,
        startDate:'2023-02-10',
        endDate:'2023-04-19',
        state: 'En espera'
    },
];

const renderSeparator = () => (
    <View
        style={{
            backgroundColor: '#F4F7F8',
            height: 5,
        }}
    />
);

const deviceHeight = Dimensions.get('window').height - 150;
export default function VacationReportPage() {
    console.log(deviceHeight);
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Estados de vacaciones"/>
                <SafeAreaView style={styles.list}>
                    <ScrollView>
                        <FlatList style={{height:deviceHeight}}
                            data={DATA}
                            ItemSeparatorComponent={renderSeparator}
                            renderItem={({ item }) => <ItemVacationReport element={item} />}
                            keyExtractor={item => item.id}
                        />
                    </ScrollView>
                </SafeAreaView>
                <BottomToolbar />
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }, 
    list: {
        flex: 1,
        marginTop: 50
    },  
    image: {
        flex: 1
    }
});