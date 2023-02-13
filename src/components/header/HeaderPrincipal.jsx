import { View, StyleSheet, Image } from "react-native";
import DateUtil from "../../utils/date";
import StyledText from "../input/StyledText";


export default function HeaderPrincipal({ username }) {
    const dateStr = DateUtil.formatDate(new Date());
    return (
        <View style={styles.container}>
            <View>
                <StyledText align='left' fontWeight='bold' style={styles.textWelcome}>Hola {username}!</StyledText>
                <StyledText align='left' style={styles.textDate}>{dateStr}</StyledText>
            </View>
            <View>
                <Image
                    style={styles.userPhoto}
                    source={require('../../../assets/images/desing_girl.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        marginLeft: 10,
        paddingBottom: 15,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    arrow: {
        width: 20,
        height: 20,
        marginTop: 8,
        marginRight: 10,
        resizeMode: 'cover',
        alignItems: 'center',
    },
    textWelcome: {
        color: '#FFFFFF',
        fontSize: 24,
    },
    textDate: {
        color: '#FFFFFF',
        fontSize: 12
    },
    userPhoto: {
        width: 70,
        height: 70,
        marginRight:15,
        marginTop:-5,
        resizeMode: 'cover',
        textAlign: 'center'
    }
});













