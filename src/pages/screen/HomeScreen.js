import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = ()=>{
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touch}
               onPress={()=> navigation.navigate("Stack")}
            >
             <Text style={styles.button}>Go To Slack Screen</Text>
            </TouchableOpacity>
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