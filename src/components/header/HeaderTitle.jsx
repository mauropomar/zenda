import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import StyledText from "../input/StyledText";

export default function HeaderTitle({ title, linkText, clickStates }) {
    const navigation = useNavigation();
    const onBack = (event) => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <TouchableOpacity
                    onPress={() => onBack()}
                    accessibilityRole="button"
                >
                    <Image
                        style={styles.arrow}
                        source={require('../../../assets/images/arrow-back.png')}
                    />
                </TouchableOpacity>
                <StyledText align='left' fontWeight='bold' style={styles.textHeader}>{title}</StyledText>
            </View>
            <View style={styles.containerRight}>
                <TouchableOpacity
                    onPress={() => clickStates()}                >
                    <StyledText align='right' fontWeight='bold' style={styles.textRight}>{linkText}</StyledText>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginLeft: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    containerLeft: {
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    containerRight: {
        marginRight: 10,
        marginTop: 10
    },
    arrow: {
        width: 20,
        height: 20,
        marginTop: 8,
        marginRight: 10,
        resizeMode: 'cover',
        alignItems: 'center',
    },
    textHeader: {
        color: '#FFFFFF',
        fontSize: 24,
    },
    textRight: {
        color: '#FFFFFF',
        fontSize: 14,
    }
});