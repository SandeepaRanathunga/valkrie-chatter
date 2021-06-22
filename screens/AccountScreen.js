import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { auth } from '../firebase';

import Screen from '../components/Screen';
import colors from '../config/colors';
const AccountScreen = ({ navigation }) => {
  const handleSignOut = async () => {
    try {
      const authUser = await auth.signOut();
      navigation.replace('Login');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Screen style={styles.screen}>
      <Image
        source={{ uri: auth?.currentUser?.photoURL }}
        style={styles.image}
      />
      <Text style={styles.name}>{auth?.currentUser?.displayName}</Text>
      <Button
        title='See you Buddy!'
        buttonStyle={styles.button}
        containerStyle={styles.container}
        onPress={handleSignOut}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 10,
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.primary,
  },
  container: {
    marginTop: 10,
  },
});
