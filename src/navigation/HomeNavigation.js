import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../pages/screen/HomeScreen';
import SettingScreen from '../pages/screen/SettingScreen';

const Tab = createBottomTabNavigator();

function HomeNavigation() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: 'purple'
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-home" size={size} color={color} />

                    ),
                    headerShown: false
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
                    headerShown: false
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default HomeNavigation