import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/card';
import Header from './components/header';
import tw from "twrnc";
import CircularButtons from './components/circularButtons';
import Portfolio from './components/portfolio';
import Rewards from './components/rewards';

export default function App() {
  return (
    <View style={tw`bg-black h-full`}>
      <Header />
      <Card />
      <CircularButtons />
      <Portfolio />
      <Rewards/>
      <StatusBar style="auto" />
    </View>
  );
}

