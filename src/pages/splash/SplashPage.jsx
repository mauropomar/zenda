import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function SplashPage() {
    return (
        <View style={styles.container}>
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
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
});
