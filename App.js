import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from './config/colors';
import Screen from './components/Screen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import AddChatScreen from './screens/AddChatScreen';

const screenOptoins = {
  headerStyle: { backgroundColor: colors.primary },
  headerTitleStyle: { color: colors.white },
  headerTintColor: colors.white,
};

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name='Messages' component={HomeScreen} />
//     <Tab.Screen name='Account' component={AccountScreen} />
//   </Tab.Navigator>
// );

const StackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptoins}>
    <Stack.Screen
      name='Login'
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name='Register' component={RegisterScreen} />
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='Account' component={AccountScreen} />
    <Stack.Screen name='AddChat' component={AddChatScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
