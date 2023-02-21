import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import StyledText from "../input/StyledText";
import { Foundation } from '@expo/vector-icons';


export default function SearchRequestPanel() {
    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Foundation name="page" size={48} /> 
                <StyledText align='center' fontWeight='bold' style={{marginVertical: 15}}>Lo sentimos, no encontramos resultados para su búsqueda</StyledText>
                <StyledText align='center'>Puedes utilizar el Rut o el Nombre y Apellidos para buscar nuevamente</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHeader: {
        
    }
});


