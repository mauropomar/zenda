import { View, StyleSheet, Image } from "react-native";
import DateUtil from "../../utils/date";
import StyledText from "../input/StyledText";


export default function HeaderAccount({ username, email }) {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.userPhoto}
                    source={require('../../../assets/images/desing_girl.png')}
                />
            </View>
            <View>
                <StyledText align='left' fontWeight='bold' style={styles.username}>{username}</StyledText>
                <StyledText align='left' style={styles.email}>{email}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginLeft: 10,
        justifyContent: 'flex-start',
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
    username: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    email: {
        color: '#FFFFFF',
        fontSize: 12
    },
    userPhoto: {
        width: 70,
        height: 70,
        marginRight: 10,
        marginTop: -5,
        resizeMode: 'cover',
        textAlign: 'center'
    }
});













