import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import tw from '../lib/tailwind';
import vector1 from './assets/Vector1.png';
import vector2 from './assets/Vector2.png';
import vector3 from './assets/Vector3.png';

export default function CircularButtons() {
    return (
        <View style={tw`mt-8`}>
            <View style={tw`w-full px-2 flex flex-row mt-8 items-center justify-around`}>
                <View style={tw`w-1/4 border-2 border-purple-600 flex flex-col items-center p-0.5 h-42`}>
                    <View style={tw`newborder p-2  rounded-full boxshdw`}>
                        <View style={tw` btn h-14 w-14 rounded-full`}>
                            <Image style={tw`w-2/5 h-2/5 m-auto`} source={vector1}></Image>
                        </View>
                    </View>
                    <Text style={tw`text-white font-bold mt-1 text-center text-sm`}>
                        Deposit Crypto
                    </Text>
                    <Text style={tw`text-white text-center text-sm font-light`}>
                        to add limit
                    </Text>
                </View>
                <View style={tw` w-1/4 flex flex-col items-center p-0.5 h-42`}>
                    <View style={tw`newborder p-2 rounded-full boxshdw`}>
                        <View style={tw`btn h-14 w-14 rounded-full`}>
                            <Image style={tw`w-2/5 h-2/5 m-auto`} source={vector2}></Image>
                        </View>
                    </View>
                    <Text style={tw`text-white font-bold mt-1 text-center text-sm`}>
                        Use XCoins
                    </Text>
                    <Text style={tw`text-white text-center text-sm font-light`}>
                        for cashbacks of Rs 1000
                    </Text>

                </View>
                <View style={tw` w-1/4 flex flex-col items-center p-0.5 h-42`}>
                    <View style={tw`newborder p-2 rounded-full boxshdw`}>
                        <View style={tw`btn h-14 w-14 rounded-full`}>
                            <Image style={tw`w-2/5 h-2/5 m-auto`} source={vector2}></Image>
                        </View>
                    </View>
                    <Text style={tw`text-white font-bold mt-1 text-center text-sm`}>
                        Pay your due
                    </Text>
                    <Text style={tw`text-white text-center text-sm font-light`}>
                        to release locked crypto
                    </Text>
                </View>
                <View style={tw` w-1/4 flex flex-col items-center p-0.5 h-42`}>
                    <View style={tw`newborder p-2 rounded-full boxshdw`}>
                        <View style={tw`btn h-14 w-14 rounded-full`}>
                            <Image style={tw`w-2/5 h-2/5 m-auto`} source={vector3}></Image>
                        </View>
                    </View>
                    <Text style={tw`text-white font-bold mt-1 text-center text-sm`}>
                        Withdraw Crypto
                    </Text>
                    <Text style={tw`text-white text-center text-sm font-light`}>
                        to remove limit
                    </Text>
                </View>
            </View>
            <View style={tw`border-2 border-purple-600 mx-2 p-3 flex flex-col items-center`}>
                <Text style={tw`text-white font-light mt-1 text-justify text-base`}>
                    Deposit your cryptos to get instant credit limit on the card. Start using your card to earn XCoins @ 5% cashback rate (offer could change in the future)
                </Text>
                <View style={tw`newborder p-2 rounded-full boxshdw`}>
                        <View style={tw`btn h-14 w-14 rounded-full`}>
                            <Image style={tw`w-2/5 h-2/5 m-auto`} source={vector3}></Image>
                        </View>
                    </View>
                <Text style={tw`text-white font-bold mt-1 text-center text-sm`}>
                    Deposit Now
                </Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    btn: {
        background: `linear-gradient(169.23deg, rgba(255, 255, 255, 0.25) -0.52%, rgba(255, 255, 255, 0) 104.4%)`,
        filter: `drop-shadow(0px -4px 20px rgba(255, 255, 255, 0.15))`,
        backdropFilter: `blur(8px)`,
    },
    boxshdw: {
        boxShadow: `13 10 25px -5px rgba(24, 178, 222, 0.4),-13px -10px 25px -5px rgba(251, 55, 255, 0.4)`,
    },
    dropshadow: {
        filter: ` drop-shadow(0px 21px 64px #84E4FF)`,
    },
    newborder: {
        position: `relative`,
        background: `linear-gradient(315deg, hsla(193, 80%, 48%, 1) 0%, hsla(0, 0%, 0%, 1) 30%, hsla(0, 0%, 0%, 1) 70%, hsla(299, 100%, 61%, 1) 100%)`,
    }

});
