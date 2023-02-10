import { View, StyleSheet } from "react-native";
import StyledText from "../input/StyledText";
import DateUtil from "../../utils/date";

export default function BoxLastRequest({ elements }) {
    const { title, date, status } = elements;
    const dateStr = DateUtil.formatDateDayMonth(new Date(date));
    return (
        <View style={styles.container}>
            <StyledText align='left' fontWeight='bold' style={styles.title}>{title}</StyledText>
            <StyledText align='left'>Pedido el</StyledText>
            <StyledText align='left' fontWeight='bold'>{dateStr}</StyledText>
            <StyledText align='left' style={styles.textEncabStatus}>Estado</StyledText>
            <View style={styles.status}>
                <StyledText align='left' style={styles.textStatus}>{status}</StyledText>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '45%',
        alignItems: 'center',
        backgroundColor: '#FBFCFC',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        borderRadius: 10,
        elevation: 8,
        margin: 10,
        padding: 15
    },
    title: {
        marginBottom: 5,
    },
    status: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 5,
        width: 100,
        height: 30
    },
    textEncabStatus: {
        marginBottom: 5
    },
    textStatus: {
        color: '#FFFFFF'
    }
});