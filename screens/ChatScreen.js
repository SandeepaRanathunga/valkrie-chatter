import React, { useLayoutEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { auth, database } from '../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

import Screen from '../components/Screen';
import colors from '../config/colors';

const ChatScreen = ({ navigation, route }) => {
  const [message, setMessage] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.roomName,
      headerTitleStyle: { alignSelf: 'flex-start' },
    });
  }, []);
  const handleSendMessage = () => {
    console.log(message);
    database
      .collection('chats')
      .doc(route.params.id)
      .collection('messages')
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: message,
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoUrl: auth.currentUser.photoURL,
      });
    setMessage('');
  };
  return (
    <Screen style={styles.screen}>
      <ScrollView></ScrollView>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Input
            placeholder='Mmmm, say something....'
            onChangeText={(message) => setMessage(message)}
            value={message}
          />
        </View>
        <TouchableOpacity onPress={handleSendMessage}>
          <FontAwesome name='send' size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  screen: {
    alignContent: 'center',
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  input: {
    width: 350,
  },
});
