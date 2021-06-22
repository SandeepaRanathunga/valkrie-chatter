import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from './config/colors';
import Screen from './components/Screen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const screenOptoins = {
  headerStyle: { backgroundColor: colors.primary },
  headerTitleStyle: { color: colors.white },
  headerTintColor: colors.white,
};

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptoins}>
    <Stack.Screen
      name='Login'
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name='Register' component={RegisterScreen} />
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
