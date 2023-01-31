import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import StackScreen from '../pages/screen/StackScreen';
import LoginPage from '../pages/login/LoginPage';
import HomeNavigation from './HomeNavigation';

const Stack = createNativeStackNavigator();

function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='HomeScreen'
            >
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeNavigation}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Stack"
                    component={StackScreen}
                    options={{
                        headerShown: true
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack