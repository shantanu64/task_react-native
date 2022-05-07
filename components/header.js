import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

export default function Header() {
  return (
    <View>
      <View style={styles.nav}>
        <View style={styles.username}>
          <Text style={styles.username_text1}>Welcome back</Text>
          <Text style={styles.username_text2}>Jeanne</Text>
        </View>
        <View style={styles.notification}>
          <Icon name='bell' color="white" size={30} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  username_text1: {
    color: 'white'
  },
  username_text2: {
    color: 'white'
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:'14px'
  }
});
