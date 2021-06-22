import React, { useLayoutEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { auth, database } from '../firebase';
import { Avatar } from 'react-native-elements';

import Screen from '../components/Screen';
import AppListItem from '../components/AppListItem';

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Valkrie Chatter',
      headerTitleStyle: { alignSelf: 'center' },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <Screen>
      <ScrollView>
        <AppListItem />
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
