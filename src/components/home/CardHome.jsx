import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BoxVacation from "./BoxVacation";
import BoxHoursWork from "./BoxHoursWorked";
import CardCommunication from "./CardCommunication";
import CardLastRequest from "./CardLastRequest";
import CardNextBirthDay from "./CardNextBirhday";
import CardIncorporation from "./CardIncorporation";
import StyledText from "../input/StyledText";

export default function CardHome() {
    const navigation = useNavigation();
    const onShowBirthDayPage = () => {
        navigation.navigate("BirthDay")
    }

    const onShowCommunicationPage = () => {
        navigation.navigate("Communication")
    }

    const onShowIncorporationPage = () => {
        navigation.navigate("Incorporation")
    }

    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <StyledText align='left' fontWeight='bold' style={styles.title}>Comunicaciones</StyledText>
                <TouchableOpacity onPress={() => onShowCommunicationPage()}>
                    <Image style={styles.imageSeeMore} source={require('../../../assets/images/arrow-right.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.sectionCard}>
                <CardCommunication />
            </View>

            <View style={styles.titleContainer}>
                <StyledText align='left' fontWeight='bold' style={styles.title}>Incorporaciones</StyledText>
                <TouchableOpacity onPress={() => onShowIncorporationPage()}>
                    <Image style={styles.imageSeeMore} source={require('../../../assets/images/arrow-right.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.sectionRequest}>
                <CardIncorporation />
            </View>

            <View style={styles.titleContainer}>
                <StyledText align='left' fontWeight='bold' style={styles.title}>Próximos cumpleaños</StyledText>
                <TouchableOpacity onPress={() => onShowBirthDayPage()}>
                    <Image style={styles.imageSeeMore} source={require('../../../assets/images/arrow-right.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.sectionRequest}>
                <CardNextBirthDay />
            </View>

            <View style={styles.section}>
                <BoxVacation isVacation={true} daysNumber={2} title="Vacaciones"/>
                <BoxVacation isVacation={false} daysNumber={20} title="Licencia" />
            </View>

            <View style={styles.section}>
                <BoxHoursWork daysNumber={20} />
            </View>
            
            <StyledText align='left' fontWeight='bold' style={styles.title}>Últimas Solicitudes</StyledText>
            <View style={styles.sectionRequest}>
                <CardLastRequest />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    section: {
        flexDirection: 'row',
        gap: 1,
        padding: 10,
        justifyContent: 'space-around',
    },
    sectionCard: {
        padding: 2,
    },
    sectionRequest: {
        flexDirection: 'row',
        gap: 1,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 20,
        marginTop: 0,
        marginLeft: 20
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
    },
    imageSeeMore: {
        marginTop: 10,
    },
});