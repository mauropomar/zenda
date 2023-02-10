import { View, StyleSheet } from "react-native";
import StyledText from "../input/StyledText";

export default function BoxLastRequest() {
    const { type, date, state } = props.items;
    return (
        <View style={styles.container}>
            <StyledText align='left' fontWeight='bold'>Pemisos</StyledText>
            <StyledText align='left' fontWeight='bold'>14 de Mayo</StyledText>
            <StyledText align='left'>Estado</StyledText>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '48%',
        alignItems: 'center',
        borderWidth: 0.75,
        margin: '1%',
        padding: 15
    }
});