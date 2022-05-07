import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from '../lib/tailwind';
import portfolio from './assets/portfolio.png'
import coins from './assets/coins.png'


export default function Portfolio() {
    return (
        <View style={tw`mt-8 w-full dropshadow`}>
            <View style={tw`h-34 -ml-2 w-full`}>
                <ImageBackground style={styles.backgroundImage} source={portfolio}>
                    <View>
                        <View style={tw`flex flex-row justify-between px-10 mt-6`}>
                            <View style={tw`flex flex-row `}>
                                <Text style={tw`text-white`}>My Portfolio</Text>
                            </View>
                            <View style={tw``}>
                                <Text style={tw`text-white`}>Manage<Icon name='right' /></Text>
                            </View>
                        </View>
                        <View style={tw`flex flex-row justify-between items-center px-10 mt-2`}>
                            <Text style={tw`text-white font-light text-2xl`}>₹4,001.46</Text>
                            <View style={tw`w-26 h-6`}>
                                <Image style={tw`w-full h-full`} source={coins}></Image>
                            </View>
                        </View>
                        <Text style={tw`text-gray-400 px-10 font-light text-sm mt-1`}><Icon name='caretup' /> 4.32%</Text>

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
