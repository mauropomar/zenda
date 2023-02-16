import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import StyledText from "../input/StyledText";


export default function BoxFolder({ elements, isSubFolder }) {
    const navigation = useNavigation();

    const { id, name } = elements;

    const onShowSubFolder = () => {
        if (isSubFolder) {
            navigation.navigate("Document", { subFolder: name });
        } else {
            navigation.navigate("SubFolderDocument", { folder: name });
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onShowSubFolder}>
                <Image source={require('../../../assets/icons/document.png')}
                    style={styles.icon} />
                <View style={styles.containerText}>
                    <StyledText align='center'>{name}</StyledText>
                </View>
            </TouchableOpacity>
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
    containerText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    icon: {

    }
});