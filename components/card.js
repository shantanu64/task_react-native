import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from '../lib/tailwind';
import cardbg from './assets/cardbg.png'
export default function Card() {
    return (
        <View>

            <View style={tw`flex flex-row justify-between px-4`}>
                <View style={tw`flex flex-row `}>
                    <Text style={tw`text-white`}>My Card</Text>
                </View>
                <View style={tw``}>
                    <Text style={tw`text-white`}>Manage<Icon name='right' /></Text>
                </View>
            </View>

            <View style={tw`h-62 w-full p-2.5 mt-2`}>
                <ImageBackground style={styles.backgroundImage} source={cardbg}>
                    <View style={tw`flex flex-row justify-between w-full px-6 mt-6`}>
                        <Text style={tw`text-white font-bold`}>
                            VISA
                        </Text>
                        <Text style={tw`text-white font-light`}>
                            01/28
                        </Text>
                    </View>
                    <View style={tw`w-full flex flex-col mt-2`}>
                        <Text style={tw`text-white text-base font-light ml-6`}>
                            Balance
                        </Text>
                        <Text style={tw`text-white ml-6 text-3xl font-light -mt-1`}>
                            ₹1,432.00
                        </Text>
                        <Text style={tw`text-white ml-6 text-base font-light mt-3`}>
                            ****  ****  ****  5432
                        </Text>

                    </View>
                </ImageBackground>
            </View>


            <View style={tw`w-4/5 mx-auto h-16 rounded-2xl items-center -mt-16 btn newborder flex flex-row`}>
                <View style={tw` h-16 rounded-2xl items-center bg-black w-full btn flex flex-row`}>
                    <Text style={tw`text-white text-sm  ml-2`}>Eligible Limit:</Text>
                    <Text style={tw`text-xl ml-3 text-white font-light`}>₹2,800.72</Text>
                    <Text style={tw`text-white ml-20`}><Icon name='right' /></Text>
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
    card: {
        marginHorizontal: 'auto',
        width: '100%',
        borderRadius: '10',
        flexDirection: 'column',
        gap: '10',
        padding: '10'
    },
    cardProvider: {
        color: 'white',
        marginTop: '12',
        marginLeft: '16'
    },
    cardExpiry: {
        color: 'white',
        marginTop: '12',
        marginRight: '16'
    },
    cardText1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardText2: {
        flexDirection: 'column',
    },
    cardBalance: {
        color: 'white',
        fontSize: '20',
        marginLeft: '16'
    },
    cardBalAmount: {
        color: 'white',
        fontSize: '30',
        marginLeft: '16'
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: "center",
    },
});
