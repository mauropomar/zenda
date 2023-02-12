import { View, StyleSheet, Image } from "react-native";
import StyledText from "../input/StyledText";
import DateUtil from "../../utils/date";


export default function BoxBirthDay({ elements }) {
    const { name, url, date } = elements;
    const dateStr = DateUtil.formatDateDayMonth(new Date(date));
    return (
        <View style={styles.container}>
            <Image source={url}
                style={styles.image} />
            <StyledText align='left' fontWeight='bold'>{name}</StyledText>
            <StyledText align='left'>{dateStr}</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '28%',
        backgroundColor: '#FBFCFC',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        borderRadius: 10,
        elevation: 8,
        margin: 10,
        padding: 15
    },
    image: {
        width: 70,
        height: 70
    }
});