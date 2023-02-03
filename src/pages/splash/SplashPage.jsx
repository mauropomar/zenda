import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function SplashPage() {
    const navigation = useNavigation();
    const onLayout=(event)=> {
        setTimeout(()=>{
            navigation.navigate("Login")
        }, 3000);    
    }
    return (
        <View style={styles.container} onLayout={onLayout}>
            <Image
                style={styles.logo}
                source={require('../../../assets/images/logo.png')}
            />
            <Image
                style={styles.imageWaver}
                source={require('../../../assets/images/waver_bottom.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
       
    },
    imageWaver: {
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
});
