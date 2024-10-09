import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage';
import OnboardingScreen from './components/OnboardingScreen';
import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import VerificationScreen from './components/VerificationScreen';
import HomeScreen from './components/HomeScreen';
import EventScreen from './components/EventScreen';
import ProfileScreen from './components/ProfileScreen';
import DetailScreen from './components/DetailScreen';
import DetailsScreen from './components/DetailsScreen';
import SearchScreen from './components/SearchScreen';
import ResetPassword1Screen from './components/ResetPassword1Screen';
import VerificationCodeScreen from './components/VerificationCodeScreen';
import EditProfileScreen from './components/EditProfileScreen';
import FeedbackScreen from './components/FeedbackScreen'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Event" component={EventScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResetPassword1" component={ResetPassword1Screen} />
        <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
