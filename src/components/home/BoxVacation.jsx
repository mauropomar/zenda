import { View, StyleSheet, Image } from "react-native";
import StyledText from "../input/StyledText";

export default function BoxVacation({ isVacation, daysNumber }) {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                {isVacation ? <Image source={require('../../../assets/icons/beach_vacation.png')} /> :
                    <Image source={require('../../../assets/icons/medicaments.png')} />}
            </View>
            <View style={styles.containerText}>
                <StyledText align='left' fontWeight='bold'>Vacaciones</StyledText>
                <StyledText align='left' style={styles.subText}>Restantes</StyledText>
            </View>
            <View style={styles.containerDays}>
                <StyledText align='left' fontWeight='bold' style={styles.textDaysNumber}>{daysNumber}</StyledText>
                <StyledText align='left' style={styles.textDays}>Días</StyledText>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFCFC',
        height: 130,
        borderRadius: 10,
        marginHorizontal: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 8
    },
    containerText: {
        marginTop: 10,
        marginLeft: 10
    },
    containerDays: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 10
    },
    textDaysNumber: {
        fontSize: 24,
        marginRight: 5
    },
    textDays: {
        fontSize: 10,
        marginTop: 15
    },
    text: {
        fontSize: 24
    },
    subText: {
        fontSize: 10
    },
    icon: {
        marginTop: 10,
        marginLeft: 10
    }
});