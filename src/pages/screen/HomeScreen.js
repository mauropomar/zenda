import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = ()=>{
    return (
        <View style={styles.container}>
             <Text>Home</Text>
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
    touch:{
      backgroundColor:'purple',
      padding:30,
      width:"50%",
      alignSelf:"center",
      borderRadius: 10
    },
    button: {
      color:"white",
      textAlign:"center",
      fontSize: 15
    }
  });

export default HomeScreen  