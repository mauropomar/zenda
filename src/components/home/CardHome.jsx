import { View, Text, StyleSheet } from "react-native";
import BoxVacation from "./BoxVacation";

export default function CardHome() {
    return (
        <View style={styles.container}>
            <View style={styles.sectionOne}>
                <BoxVacation isVacation={true} daysNumber={2} />
                <BoxVacation isVacation={false} daysNumber={20}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionOne: {
        flexDirection: 'row',
        gap: 1,
        padding: 10,
        justifyContent: 'space-around',
    },
    box1: {
        flex: 1,
        backgroundColor: '#FBFCFC',
        height: 130,
        borderRadius: 10,
        marginHorizontal: 10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 8
    },
    box2: {
        flex: 1,
        backgroundColor: 'coral',
        height: 50,
        borderRadius: 10
    }
});