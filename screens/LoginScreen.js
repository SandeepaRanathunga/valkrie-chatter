import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';

import Screen from '../components/Screen';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Screen style={styles.screen}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 150, height: 150 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder='Email'
          leftIcon={{
            type: 'font-awesome',
            name: 'envelope',
            size: 22,
            color: 'grey',
          }}
          type='email'
          onChangeText={(email) => setEmail(email)}
        />
        <Input
          placeholder='Password'
          leftIcon={{
            type: 'font-awesome',
            name: 'lock',
            size: 30,
            color: 'grey',
          }}
          type='password'
          secureTextEntry
          onChangeText={(password) => setEmail(password)}
        />
        <Button title='Lets go!' />
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  inputContainer: {
    width: '90%',
  },
});
