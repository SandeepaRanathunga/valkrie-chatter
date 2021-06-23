import React, { useLayoutEffect, useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { auth, database } from '../firebase';
import { Avatar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import Screen from '../components/Screen';
import AppListItem from '../components/AppListItem';

const HomeScreen = ({ navigation }) => {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const cleanUp = database
      .collection('chats')
      .onSnapshot((snapshot) =>
        setChatRooms(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
    return cleanUp;
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Valkrie Chatter',
      headerTitleStyle: { alignSelf: 'center' },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Account')}
          style={{ marginHorizontal: 10 }}
        >
          <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.rightView}>
          <TouchableOpacity
            style={{ marginHorizontal: 10 }}
            onPress={() => navigation.navigate('AddChat')}
          >
            <Entypo name='new-message' size={28} color='black' />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 10 }}>
            <MaterialCommunityIcons name='camera' size={30} color='black' />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  const viewChat=(id,roomName)=>{
    navigation.navigate('ViewChat',{id:id,roomName:roomName});
  }
  return (
    <Screen>
      <ScrollView>
        {chatRooms.map((chatRoom) => (
          <AppListItem
            id={chatRoom.id}
            roomName={chatRoom.data.roomName}
            key={chatRoom.id}
            viewChat={viewChat}
          />
        ))}
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rightView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
