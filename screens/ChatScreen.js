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
import Message from '../components/Message';
import colors from '../config/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ChatScreen = ({ navigation, route }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.roomName,
      headerTitleStyle: { alignSelf: 'flex-start' },
    });
  }, [navigation]);

  useLayoutEffect(() => {
    const cleanUp = database
      .collection('chats')
      .doc(route.params.id)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
    return cleanUp;
  }, [route]);
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
      <ScrollView>
        {messages.map(
          ({ id, data }) =>
            data.email === auth.currentUser.email ? (
              <Message
                id={id}
                data={data}
                key={id}
                align='flex-end'
                bgColor={colors.light_grey}
                color={'black'}
              />
            ) : (
              <Message
                id={id}
                data={data}
                key={id}
                align='flex-start'
                bgColor={colors.slate_grey}
                color={colors.white}
              />
            )

          //   <Text>{data.message}</Text>
        )}
      </ScrollView>
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
