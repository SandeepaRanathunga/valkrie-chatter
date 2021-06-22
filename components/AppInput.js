import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

const AppInput = ({ palceholder, style }) => {
  return (
    <View style={styles.inputField}>
      <FontAwesome name='user' size={24} color='black' />
      <TextInput palceholder={palceholder} />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: 'grey',
  },
});
