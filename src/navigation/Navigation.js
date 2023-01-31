import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import StackScreen from '../pages/screen/StackScreen';
import HomeScreen from '../pages/screen/HomeScreen';
import SettingScreen from '../pages/screen//SettingScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName='HomeScreen'
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                name="Stack"
                component={StackScreen}
                options = {{
                    headerBackTitleVisible: false
                }}
            />
        </Stack.Navigator>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: 'purple'
            }}
        >
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-home" size={size} color={color} />

                    ),
                    headerShown:false
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}