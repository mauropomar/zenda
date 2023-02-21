import React from "react";
import { View, StyleSheet, ImageBackground, SafeAreaView, ScrollView, FlatList } from 'react-native';
import HeaderTitle from "../../components/header/HeaderTitle";
import BottomToolbar from '../../components/toolbar/BottomToolbar';
import ItemPermissionReport from "../../components/permission/ItemPermissionReport";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        dateRequest: '2023-02-09',
        type:'PERMISO ADMINISTRATIVO',
        hours:1,
        startDate:'2023-02-09',
        endDate:'2023-02-19',
        advanceValue: 202.02,
        state: 'Aprobado'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        dateRequest: '2023-04-19',
        type:'PERMISO ADMINISTRATIVO',
        hours:10,
        startDate:'2023-02-10',
        endDate:'2023-04-19',
        advanceValue: 102.99,
        state: 'Rechazado'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        dateRequest: '2023-07-20',
        type:'PERMISO ADMINISTRATIVO',
        hours:10,
        startDate:'2023-02-10',
        endDate:'2023-04-19',
        advanceValue: 25.60,
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

export default function PermissionReportPage() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Estados de permisos"/>
                <SafeAreaView style={styles.list}>
                    <ScrollView>
                        <FlatList
                            data={DATA}
                            ItemSeparatorComponent={renderSeparator}
                            renderItem={({ item }) => <ItemPermissionReport element={item} />}
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
        marginTop: 50,
    },  
    image: {
        flex: 1
    }
});