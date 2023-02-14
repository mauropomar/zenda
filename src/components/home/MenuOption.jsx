import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Image,
} from 'react-native';
import StyledText from '../input/StyledText';

const DATA = [
    {
        id: '1',
        title: 'Anticipos',
        description: 'Pide tu anticipo segun fechas estimadas',
        icon: require('../../../assets/icons/advance_money.png')
    },
    {
        id: '2',
        title: 'Vacaciones',
        description: 'Pide tus vacaciones a feriados legales',
        icon: require('../../../assets/icons/beach_vacation.png')
    },
    {
        id: '3',
        title: 'Permisos Administrativos',
        description: 'Pide tus permisos segun lo que necesites',
        icon: require('../../../assets/icons/time_date.png')
    },
    {
        id: '4',
        title: 'Evaluación',
        description: 'Evaluá a tu área o a compañeros de trabajo',
        icon: require('../../../assets/icons/evaluation.png')
    },
];

const Item = ({ elem }) => (
    <View style={styles.item}>
        <Image source={elem.icon} style={styles.image} />
        <View>
            <StyledText align='left' fontWeight='bold' style={styles.title}>{elem.title}</StyledText>
            <StyledText align='left' style={styles.description}>{elem.description}</StyledText>
        </View>
    </View>
);

const MenuOption = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item elem={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
    },
    description: {
        fontSize: 14,
    },
    image: {
        marginTop: 7,
        marginRight: 10
    }
});

export default MenuOption;