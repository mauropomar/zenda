import React, { useCallback } from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView, FlatList, TouchableOpacity, Image, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BottomToolbar from "../../components/toolbar/BottomToolbar";
import StyledText from "../../components/input/StyledText";
import HeaderTitle from "../../components/header/HeaderTitle";

const DATA = [
    { id: 1, name: 'Contáctanos', route: 'AdvanceState', icon: require('../../../assets/icons/contact.png') },
    { id: 2, name: 'Condiciones y privacidad', route: 'Condition', icon: require('../../../assets/icons/privacy.png') }
]


const ItemMenu = ({ element }) => {
    const navigation = useNavigation();
    const onSelectMenu = () => {
        if (element.id === 1) {
            sendEmail('mailto:contacto@defontana.com?subject=Contáctanos desde Zenda app');
        } else {
            navigation.navigate(element.route);
        }
    }

    const sendEmail = async (url) => {
        await Linking.openURL(url);
    };

    return (
        <>
            <TouchableOpacity onPress={onSelectMenu}>
                <View style={styles.item}>
                    <View style={styles.containerLeft}>
                        <View style={styles.icon}>
                            <Image source={element.icon}
                                style={styles.icon} />
                        </View>
                        <StyledText fontWeight="bold" style={{ marginRight: 10, marginVertical: 10 }}>{element.name}</StyledText>
                    </View>
                    <View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} style={{ marginRight: 10, marginVertical: 10 }} />
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


export default function HelpPage() {
    const [version, setVersion] = React.useState("0.4.2");
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/bg_tryniti.png')} resizeMode="cover" style={styles.image}>
                <HeaderTitle title="Ayuda" />
                <SafeAreaView style={styles.view}>
                    <FlatList
                        data={DATA}
                        ItemSeparatorComponent={renderSeparator}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (<ItemMenu element={item} />)}
                    >
                    </FlatList>
                </SafeAreaView>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: 20 }}>
                    <StyledText align="center" style={{ marginRight: 10, marginVertical: 10 }}>Número de versión {version}</StyledText>
                </View>
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
        marginTop: 50
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
    icon: {
        marginVertical: 6,
        marginHorizontal: 10
    }
});