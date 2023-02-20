import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import StyledText from "../input/StyledText";

export default function BoxTypePermission({ elements }) {
    const { id, name, icon } = elements;
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={icon}
                    style={styles.icon} />
                
            </TouchableOpacity>
            <StyledText align='center'>{name}</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '45%',
        height: 120,
        backgroundColor: '#FBFCFC',
        justifyContent:'center',
        alignItems:'center',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        borderRadius: 10,
        elevation: 8,
        margin: 10,
        padding: 15
    },
    icon: {
       width:30,
       height:30,
       marginBottom: 10
    }
});