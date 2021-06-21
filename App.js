import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/vclogo.png')} />
      <StatusBar style='auto' />
    </View>
  );
};

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} />
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
