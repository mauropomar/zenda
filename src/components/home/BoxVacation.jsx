import { View, Text, StyleSheet } from "react-native";

export default function BoxVacation({isVacation, daysNumber}) {
    return (
        <View style={styles.container}>
            <Text>Vacations</Text>
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
});