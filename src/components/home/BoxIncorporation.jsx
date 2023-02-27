import { View, StyleSheet, Image } from "react-native";
import StyledText from "../input/StyledText";


export default function BoxIncorporation({ elements }) {
    const { name, url, post } = elements;
    return (
        <View style={styles.container}>
            <Image source={url}
                style={styles.image} />
            <StyledText align='left' fontWeight='bold'>{name}</StyledText>
            <StyledText align='left'>{post}</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        backgroundColor: '#FBFCFC',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        borderRadius: 10,
        elevation: 8,
        margin: 5,
        padding: 15
    },
    image: {
        width: 70,
        height: 70
    }
});