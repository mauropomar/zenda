import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from '../pages/screen/StackScreen';
import IntroPage from '../pages/auth/IntroPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';
import ConfirmEmailPage from '../pages/auth/ConfirmEmailPage';
import SplashPage from '../pages/splash/SplashPage';
import BirthDayPage from '../pages/birthday/BirthDayPage';
import AdvancePage from '../pages/advance/AdvancePage';
import AdvanceStatePage from '../pages/advance/AdvanceStatePage';
import SubFolderDocumentPage from '../pages/document/SubFolderDocument';
import DocumentPage from '../pages/document/DocumentPage';
import CancelDocumentPage from "../pages/document/CancelDocumentPage";
import PermissionPage from '../pages/permission/PermissionPage';
import PermissionReportPage from '../pages/permission/PermissionReportPage';
import VacationPage from '../pages/vacation/VacationPage';
import VacationReportPage from '../pages/vacation/VacationReportPage';
import StateRequestPage from '../pages/other/StateRequestPage';
import HoursExtraReportPage from '../pages/hoursextra/HoursExtraReportPage';
import SettingPage from '../pages/other/SettingPage';
import HelpPage from '../pages/other/HelpPage';
import ConditionPage from '../pages/other/ConditionPage';
import AccountPage from '../pages/other/AccountPage';
import HomePage from '../pages/home/HomePage';
import OtherOptionPage from '../pages/other/OtherOptionPage';
import FolderDocumentPage from '../pages/document/FolderDocumentPage';
import AttendancePage from '../pages/attendance/AttendancePage';
import SettlementPage from '../pages/settlement/SettlementPage';

const Stack = createNativeStackNavigator();

function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Intro'
            >
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
                    name="Home"
                    component={HomePage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Others"
                    component={OtherOptionPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="FolderDocument"
                    component={FolderDocumentPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Attendance"
                    component={AttendancePage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Settlement"
                    component={SettlementPage}
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
                <Stack.Screen
                    name="Permission"
                    component={PermissionPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="PermissionReport"
                    component={PermissionReportPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Vacation"
                    component={VacationPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="VacationReport"
                    component={VacationReportPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="HoursReport"
                    component={HoursExtraReportPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="StateRequest"
                    component={StateRequestPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Setting"
                    component={SettingPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Help"
                    component={HelpPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Condition"
                    component={ConditionPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Account"
                    component={AccountPage}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack