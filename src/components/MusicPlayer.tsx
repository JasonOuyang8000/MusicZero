import { useTheme } from '@rneui/themed';
import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TrackPlayer, {State} from 'react-native-track-player';

export default function MusicPlayer(): JSX.Element{
    const {theme} = useTheme();


    function playMusic() {
        TrackPlayer.play();
    };

    async function getState() {
        const state = await TrackPlayer.getState();
        if (State.Playing === state) {
            console.log(state);
        }

        let trackIndex = await TrackPlayer.getCurrentTrack();
        
        if (trackIndex !== null) {
            let trackObject = await TrackPlayer.getTrack(trackIndex);
            console.log(`Title: ${trackObject?.title}`);
    
            const position = await TrackPlayer.getPosition();
            const duration = await TrackPlayer.getDuration();
            console.log(`${duration - position} seconds left.`);
        }
     
            };

    function pauseMusic() {
        TrackPlayer.pause();
    }

    return (
        <SafeAreaView style={{backgroundColor: theme.colors.darkBlue, flex: 1, padding: 30}}>
            <ScrollView >
                <Text style={styles.headerStyle}>Music Zero</Text>
                <TouchableOpacity onPress={playMusic}>
                <View>
                    <Text>Play</Text>    
                </View> 
                </TouchableOpacity>
                <TouchableOpacity onPress={getState}>
                    <Text>State</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pauseMusic}>
                <View>
                    <Text>Pause</Text>    
                </View> 
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles= StyleSheet.create({
    headerStyle: {
        fontSize: 36,
        textAlign:'center',
        color: '#fff',
        fontFamily: "FS Me",
      },
})