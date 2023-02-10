import { View, StyleSheet } from "react-native";
import BoxVacation from "./BoxVacation";
import BoxHoursWork from "./BoxHoursWorked";
import CardLastRequest from "./CardLastRequest";
import StyledText from "../input/StyledText";

export default function CardHome() {
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
            <View style={styles.section}>            
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
    titleRequest:{
        fontSize:20,
        marginLeft: 20
    }
});