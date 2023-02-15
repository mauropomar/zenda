import { View, StyleSheet, Image } from "react-native";
import StyledText from "../input/StyledText";


export default function BoxFolder({ elements }) {
    const { id, name } = elements;
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/icons/document.png')}
                style={styles.icon} />
            <View style={styles.containerText}>
                <StyledText align='center'>{name}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '45%',
        height: 150,
        backgroundColor: '#FBFCFC',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        borderRadius: 10,
        elevation: 8,
        margin: 10,
        padding: 15
    },
    containerText:{
      justifyContent:'center',
      alignItems:'center',
      marginTop: 20
    },
    icon: {

    }
});