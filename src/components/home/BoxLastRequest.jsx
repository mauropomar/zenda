import { View, StyleSheet } from "react-native";
import StyledText from "../input/StyledText";
import DateUtil from "../../utils/date";
import StatusUtil from "../../utils/status";


export default function BoxLastRequest({ elements }) {
    const { title, date, status } = elements;
    const dateStr = DateUtil.formatDateDayMonth(new Date(date));
    const statusStyle = StatusUtil.getBackgroundRequest(status);
    return (
        <View style={styles.container}>
            <StyledText align='left' fontWeight='bold' style={styles.title}>{title}</StyledText>
            <StyledText align='left'>Pedido el</StyledText>
            <StyledText align='left' fontWeight='bold'>{dateStr}</StyledText>
            <StyledText align='left' style={styles.textEncabStatus}>Estado</StyledText>
            <View style={{
                backgroundColor: statusStyle.backgroudColor,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                marginTop: 5,
                width: 100,
                height: 30
            }}>
                <StyledText align='left' style={{
                    color: statusStyle.color
                }}>{status}</StyledText>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '45%',
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
        marginTop: 10
    },
    textStatus: {
        color: '#FFFFFF',
    }
});