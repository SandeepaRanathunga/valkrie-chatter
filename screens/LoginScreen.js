import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';

import Screen from '../components/Screen';
import colors from '../config/colors';
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const cleanUp = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace('Home');
      }
    });

    return cleanUp;
  }, []);

  const handleSignIn = () => {
    console.log(email);
    console.log(password);
  };
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
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          title='Lets chat!'
          onPress={handleSignIn}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        />
        <Button
          title='Join to chat!'
          type='outline'
          containerStyle={styles.buttonContainer}
          onPress={() => navigation.navigate('Register')}
          titleStyle={styles.buttonTitle}
        />
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
  button: {
    height: 50,
    backgroundColor: colors.primary,
  },
  buttonContainer: {
    marginTop: 10,
    borderColor: colors.primary,
  },
  buttonTitle: {
    color: colors.primary,
  },
});
