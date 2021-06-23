import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth, database } from '../firebase';

const Message = ({ id, data, style, align, bgColor, color }) => {
  return (
    <View
      style={[styles.container, { alignSelf: align, backgroundColor: bgColor }]}
      key={id}
    >
      {data.displayName !== auth.currentUser.displayName && (
        <Text style={[styles.user, { color: color }]}>{data.displayName}</Text>
      )}
      <Text style={[styles.message, { color: color }]}>{data.message}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    minWidth: 200,
    minHeight: 50,
    padding: 6,
    margin: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  user: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  message: {
    fontSize: 18,
  },
  time: {
    alignSelf: 'flex-end',
  },
});
