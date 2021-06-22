import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from './config/colors';
import LoginScreen from './screens/LoginScreen';

const screenOptoins = {
  headerStyle: { backgroundColor: colors.primary },
  headerTitleStyle: { color: colors.white },
  headerTintColor: colors.white,
};

const Stack = createStackNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} />
      <StatusBar style='auto' />
    </View>
  );
};

const StackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptoins}>
    <Stack.Screen name='Login' component={LoginScreen} />
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
