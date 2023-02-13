import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BoxVacation from "./BoxVacation";
import BoxHoursWork from "./BoxHoursWorked";
import CardLastRequest from "./CardLastRequest";
import CardNextBirthDay from "./CardNextBirhday";
import StyledText from "../input/StyledText";

export default function CardHome() {
    const navigation = useNavigation();
    const onShowBirthDayPage = () => {
        navigation.navigate("BirthDay")
    }
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <BoxVacation isVacation={true} daysNumber={2} />
                <BoxVacation isVacation={false} daysNumber={20} />
            </View>
            <View style={styles.section}>
                <BoxHoursWork daysNumber={20} />
            </View>
            <StyledText align='left' fontWeight='bold' style={styles.titleRequest}>Últimas Solicitudes</StyledText>
            <View style={styles.sectionRequest}>
                <CardLastRequest />
            </View>
            <View style={styles.titleNextBirth}>
                <StyledText align='left' fontWeight='bold' style={styles.titleRequest}>Próximos cumpleaños</StyledText>
                <TouchableOpacity onPress={() => onShowBirthDayPage()}>
                    <Image style={styles.imageSeeMore} source={require('../../../assets/images/arrow-right.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.sectionRequest}>
                <CardNextBirthDay />
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
    sectionRequest: {
        flexDirection: 'row',
        gap: 1,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-around',
    },
    titleRequest: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20
    },
    titleNextBirth: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    imageSeeMore: {
        marginTop: 20,
    },
});