import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import TrackPlayer, {State} from 'react-native-track-player';

export default function MusicPlayer(): JSX.Element{

    function playMusic() {
        TrackPlayer.play();
    };

    async function getState() {
        const state = await TrackPlayer.getState();
        if (State.Playing === state) {
            console.log(state);
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={playMusic}>
            <View>
                <Text>Play</Text>    
            </View> 
            </TouchableOpacity>
            <TouchableOpacity onPress={getState}>
                <Text>State</Text>
            </TouchableOpacity>
        </View>
    );
};