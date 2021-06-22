import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import * as Yup from 'yup';

import colors from '../config/colors';
import Screen from '../components/Screen';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleSubmit = () => {
    console.log('Submit');
  };
  return (
    <Screen style={styles.screen}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      <Text style={styles.regText}>Welcome Buddy! Get Connected</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder='Full Name'
          onChangeText={(name) => setName(name)}
          autoFocus
        />
        <Input placeholder='Email' onChangeText={(email) => setName(email)} />
        <Input
          placeholder='Password'
          onChangeText={(password) => setName(password)}
          secureTextEntry
        />
        <Input
          placeholder='Image URL'
          onChangeText={(imgUrl) => setName(imgUrl)}
        />
        <Button
          title='Get Connected!'
          onPress={handleSubmit}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        />
      </View>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  regText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '90%',
  },
  button: {
    backgroundColor: colors.primary,
    height: 50,
  },
});
