import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import * as Yup from 'yup';

import colors from '../config/colors';
import Screen from '../components/Screen';
import { auth } from '../firebase';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleSubmit = async () => {
    try {
      const authUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await authUser.user.updateProfile({
        displayName: name,
        photoURL:
          imgUrl ||
          'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      });
    } catch (error) {
      alert(error.message);
    }
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
        <Input
          placeholder='Email'
          onChangeText={(email) => setEmail(email)}
          type='email'
        />
        <Input
          placeholder='Password'
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
        />
        <Input
          placeholder='Image URL'
          onChangeText={(imgUrl) => setImgUrl(imgUrl)}
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
