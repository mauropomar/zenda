import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import StyledText from "../input/StyledText";

export default function HeaderTitle({title}) {
    const navigation = useNavigation();
    const onBack = (event) => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
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
    textHeader: {
        color: '#FFFFFF',
        fontSize: 24,
    }
});