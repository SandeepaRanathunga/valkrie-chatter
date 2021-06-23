import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const AppListItem = ({ id, roomName, viewChat }) => {

  return (
    <ListItem key={id} onPress={()=>viewChat(id,roomName)}>
      <Avatar
        rounded
        source={{
          uri: 'https://avatars.githubusercontent.com/u/55539896?s=40&u=67c5619ec435077071be3dd916d5f7c4150d39e0&v=4',
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.title}>{roomName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
          Any meetings today or shall we have it tomorrow.Please let me know the
          preferred time.
        </ListItem.Subtitle>
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
});
