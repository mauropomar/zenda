import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const StackScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text>Working on Stack Screen</Text>
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

  export default StackScreen; 