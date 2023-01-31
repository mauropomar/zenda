import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const SettingScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text>Working on Setting Screen</Text>
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

export default SettingScreen  