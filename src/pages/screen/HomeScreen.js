import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text>Working on Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen  