import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { database } from '../firebase';

const AppListItem = ({ id, roomName, dp, viewChat }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const cleanUp = database
      .collection('chats')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
    return cleanUp;
  }, []);
  return (
    <ListItem key={id} onPress={() => viewChat(id, roomName)}>
      <Avatar
        rounded
        source={{
          uri: dp,
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.title}>{roomName}</ListItem.Title>
        <View style={styles.subtitleContainer}>
          <ListItem.Subtitle
            numberOfLines={1}
            ellipsizeMode='tail'
            style={styles.message}
          >
            {messages[0] &&
              messages[0].displayName?.split(' ')[0] +
                ' : ' +
                messages[0].message}
          </ListItem.Subtitle>
          {/* <ListItem.Subtitle>
            {new Date(messages[0].timestamp?.seconds * 1000)
              .toLocaleTimeString()
              .slice(0, -3)}
          </ListItem.Subtitle> */}
        </View>
      </ListItem.Content>
    </ListItem>
  );
};

export default AppListItem;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitleContainer: {
    flexDirection: 'row',
  },
  message: {
    flex: 1,
  },
});
