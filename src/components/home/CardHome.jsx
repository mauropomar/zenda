import { View, Text, StyleSheet } from "react-native";
import BoxVacation from "./BoxVacation";
import BoxHoursWork from "./BoxHoursWorked";

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
    }
});