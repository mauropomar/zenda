import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "./../components/input/StyledText";

import HomePage from './../pages/home/HomePage';
import AttendancePage from './../pages/attendance/AttendancePage';
import DocumentPage from '../pages/document/DocumentPage';
import OtherOptionPage from '../pages/other/OtherOptionPage';
import ShopScreen from '../pages/screen/ShopScreen';


const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View
            style={{
                height: 60,
                backgroundColor: 'white',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}
        >
            {
                state.routes.map((route, index) => {
                    const isFocused = state.index === index;
                    const { options } = descriptors[route.key];
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key
                        })
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name)
                        }
                    }

                    const color = "green";
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => onPress()}
                            testID={options.tabBarTestID}
                            accessibilityRole="button"
                        >
                            {index === 0 && (
                                <View style={styles.icon}>
                                    {isFocused ? <Ionicons name="home" size={24} color={color} /> :
                                        <Ionicons name="home-outline" size={24} color={color} />}
                                    <StyledText style={styles.text}>Inicio</StyledText>
                                </View>
                            )}
                            {index === 1 && (
                                <View style={styles.icon}>
                                    {isFocused ? <Ionicons name="calendar" size={24} color={color} /> :
                                        <Ionicons name="calendar-outline" size={24} color={color} />}
                                    <StyledText style={styles.text}>Asistencia</StyledText>
                                </View>
                            )}
                            {index === 2 && (
                                <View style={styles.icon}>
                                    {isFocused ? <Ionicons name="add-circle" size={60} color={color} /> :
                                        <Ionicons name="add-circle" size={60} color={color} />}
                                </View>
                            )}
                            {index === 3 && (
                                <View style={styles.icon}>
                                    {isFocused ? <Ionicons name="folder-open" size={24} color={color} /> :
                                        <Ionicons name="folder-open-outline" size={24} color={color} />}
                                    <StyledText style={styles.text}>Documentos</StyledText>
                                </View>
                            )}
                            {index === 4 && (
                                <View style={styles.icon}>
                                    {isFocused ? <Ionicons name="ellipsis-vertical" size={24} color={color} /> :
                                        <Ionicons name="ellipsis-vertical-outline" size={24} color={color} />}
                                    <StyledText style={styles.text}>Más</StyledText>
                                </View>
                            )}
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const Tab = createBottomTabNavigator();


function HomeNavigation() {
    return (
        <Tab.Navigator
            tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{
                tabBarActiveTintColor: 'green'
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    headerShown: false
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Attendance"
                component={AttendancePage}
                options={{
                    headerShown: false
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    headerShown: false
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Document"
                component={DocumentPage}
                options={{
                    headerShown: false
                }}
            >
            </Tab.Screen>
            <Tab.Screen
                name="Others"
                component={OtherOptionPage}
                options={{
                    headerShown: false
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    icon: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 10
    }
});

export default HomeNavigation