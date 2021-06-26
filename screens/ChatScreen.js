import React, { useLayoutEffect, useState, useEffect, useRef } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { auth, database } from '../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

import Screen from '../components/Screen';
import Message from '../components/Message';
import colors from '../config/colors';

const ChatScreen = ({ navigation, route }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const scrollView = useRef();
  useEffect(() => {
    navigation.setOptions({
      title: route.params.roomName,
      headerTitleStyle: { alignSelf: 'flex-start' },
    });
  }, [navigation]);

  useEffect(() => {
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
  }, []);
  const handleSendMessage = () => {
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
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        renderItem={({ item: { id, data } }) =>
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
        }
      />
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Input
            placeholder='Say something....'
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
    width: '90%',
    maxWidth: 350,
  },
});
