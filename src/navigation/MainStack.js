import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import StackScreen from '../pages/screen/StackScreen';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';
import SplashPage from '../pages/splash/SplashPage';
import HomeNavigation from './HomeNavigation';

const Stack = createNativeStackNavigator();

function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Splash'
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
                    name="Splash"
                    component={SplashPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterPage}
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