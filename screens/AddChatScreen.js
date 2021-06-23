import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { auth, database } from '../firebase';

import Screen from '../components/Screen';
import colors from '../config/colors';

const AddChatScreen = ({ navigation }) => {
  const [chatRoom, setChatRoom] = useState('');
  const [dp, setDp] = useState(
    'https://www.seekpng.com/png/full/44-443227_facebook-group-facebook-group-icon-png.png'
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Let's start a Chat Room!",
    });
  });

  const handleRoomAdd = async () => {
    try {
      const result = await database.collection('chats').add({
        roomName: chatRoom,
        dp: dp,
      });
      navigation.goBack();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Input
          placeholder='Chat Room name'
          onChangeText={(name) => setChatRoom(name)}
        />
        <Input
          placeholder='Link a display picture'
          onChangeText={(link) => setDp(link)}
        />
        <Button
          title='Start'
          buttonStyle={styles.button}
          onPress={handleRoomAdd}
        />
      </View>
    </Screen>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    height: '40%',
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: colors.primary,
    height: 50,
  },
});
