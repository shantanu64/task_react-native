import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from '../lib/tailwind';
import portfolio from './assets/rewards.png'
import coins from './assets/coins.png'


export default function Rewards() {
    return (
        <View style={tw`w-full -mt-10`}>
            <View style={tw`h-40 w-full`}>
                <ImageBackground style={styles.backgroundImage} source={portfolio}>
                    <View style={tw`w-full h-full`}>
                        <View style={tw`flex flex-row justify-between px-10 mt-12`}>
                            <View style={tw`flex flex-row `}>
                                <Text style={tw`text-white`}>My Rewards</Text>
                            </View>
                            <View style={tw``}>
                                <Text style={tw`text-white`}>All<Icon name='right' /></Text>
                            </View>
                        </View>
                        <View style={tw`flex flex-row justify-between items-center px-10 mt-2`}>
                            <Text style={tw`text-white font-light text-2xl -mt-4`}>0,016xCoin</Text>
                            <View style={tw`newborder rounded-lg boxshdw`}>
                                <View style={tw`w-20 h-14 btn rounded-lg`}>
                                    <Text style={tw`text-white font-bold text-lg justify-center text-center`}>5%</Text>
                                    <Text style={tw`text-xs font-light text-white -mt-2 text-center`}>Transaction
                                        Cashback
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Text style={tw`text-white px-10 font-light text-base -mt-6`}>₹210.06</Text>

                    </View>
                </ImageBackground>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
});
