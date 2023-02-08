import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import StackScreen from '../pages/screen/StackScreen';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';
import ConfirmEmailPage from '../pages/auth/ConfirmEmailPage';
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
                    name="Home"
                    component={HomeNavigation}
                    options={{
                        headerShown: false
                    }}
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
                    name="ConfirmEmail"
                    component={ConfirmEmailPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPasswordPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPasswordPage}
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