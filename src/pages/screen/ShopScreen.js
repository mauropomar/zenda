import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const ShopScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text>Shoop Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ShopScreen 