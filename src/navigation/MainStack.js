import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GlobalUtil from '../utils/global';
import StackScreen from '../pages/screen/StackScreen';
import IntroPage from '../pages/auth/IntroPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';
import ConfirmEmailPage from '../pages/auth/ConfirmEmailPage';
import SplashPage from '../pages/splash/SplashPage';
import HomeNavigationChile from './HomeNavigationChile';
import HomeNavigationPeru from './HomeNavigationPeru';
import BirthDayPage from '../pages/birthday/BirthDayPage';
import AdvancePage from '../pages/advance/AdvancePage';
import AdvanceStatePage from '../pages/advance/AdvanceStatePage';
import SubFolderDocumentPage from '../pages/document/SubFolderDocument';
import DocumentPage from '../pages/document/DocumentPage';
import CancelDocumentPage from "../pages/document/CancelDocumentPage";

const Stack = createNativeStackNavigator();

function MainStack() {
    const HomeNavigation = GlobalUtil.getHomeNavigation();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Intro'
            >
                <Stack.Screen
                    name="HomeNavigation"
                    component={HomeNavigation}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Intro"
                    component={IntroPage}
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
                <Stack.Screen
                    name="BirthDay"
                    component={BirthDayPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="SubFolderDocument"
                    component={SubFolderDocumentPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Document"
                    component={DocumentPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="CancelDocument"
                    component={CancelDocumentPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Advance"
                    component={AdvancePage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="AdvanceState"
                    component={AdvanceStatePage}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack