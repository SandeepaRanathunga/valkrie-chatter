import React from 'react';
import Constants from 'expo-constants';
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen]}>
      <KeyboardAvoidingView style={[styles.view, style]}>
      {/* behavior={Constants.platform==='android' ? 'height':'padding' */}
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
