import React from "react";
import { View, StyleSheet, ImageBackground, SafeAreaView, FlatList, TouchableOpacity, Image, Switch } from 'react-native';
import BottomToolbar from "../../components/toolbar/BottomToolbar";
import StyledText from "../../components/input/StyledText";
import HeaderTitle from "../../components/header/HeaderTitle";

const DATA = [
    { id: 1, name: 'Comando de voz', description: 'Activar o desactivar el comando de voz*' },
    { id: 2, name: 'Huella digital', description: 'Activar o desactivar la huella difital*' }
]

const ItemMenu = ({ element }) => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <>
            <TouchableOpacity>
                <View style={styles.item}>
                    <View style={styles.containerLeft}>
                        <StyledText fontWeight="bold" style={{ marginRight: 10 }}>{element.name}</StyledText>
                        <StyledText>{element.description}</StyledText>
                    </View>
                    <View style={styles.containerRight}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#0F8847' }}
                            thumbColor={isEnabled ? '#0F8847' : '#f4f3f4'}
                            ios_backgroundColor="#0F8847"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

const renderSeparator = () => (
    <View
        style={{
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 15,
            height: 1,
        }}
    />
);


export default function StateRequestPage() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Configuración" />
                <SafeAreaView style={styles.view}>
                    <FlatList
                        data={DATA}
                        ItemSeparatorComponent={renderSeparator}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (<ItemMenu element={item} />)}
                    >
                    </FlatList>
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
        flex: 1
    },
    view: {
        marginTop: 40
    },
    item: {
        flex: 1,
        height: 50,
        marginVertical: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    containerLeft:{
        paddingTop: 10,
        paddingLeft:15
    },
    containerRight:{
        marginVertical: 15,
        marginHorizontal: 10
    }
});