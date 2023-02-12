import { View, StyleSheet, Image } from "react-native";
import StyledText from "../input/StyledText";

export default function BoxHoursWork({ daysNumber }) {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Image source={require('../../../assets/images/clock_outline.png')} />
            </View>
            <View style={styles.containerText}>
                <StyledText align='left' fontWeight='bold'>Horas Trabajadas (Hoy)</StyledText>
            </View>
            <View style={styles.containerFooter}>
                <View style={styles.containerDays}>
                    <StyledText align='left' fontWeight='bold' style={styles.textDaysNumber}>{daysNumber}</StyledText>
                    <StyledText align='left' style={styles.textHours}>Hora(s)</StyledText>
                </View>
                <View style={styles.containerSeeMore}>
                    <StyledText align='left'>Ver más</StyledText>
                    <Image style={styles.imageSeeMore} source={require('../../../assets/images/arrow-right.png')} />
                </View>
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
    containerFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginLeft: 10
    },
    containerDays: {
        flexDirection: 'row',
    },
    containerSeeMore: {
        flexDirection: 'row',
        marginRight: 10,
        justifyContent: 'space-around',
    },
    textDaysNumber: {
        fontSize: 24,
        marginRight: 5
    },
    textHours: {
        fontSize: 10,
        marginTop: 15
    },
    imageSeeMore:{
      marginTop: 3,
      marginLeft:10
    },
    icon: {
        marginTop: 10,
        marginLeft: 10
    }
});