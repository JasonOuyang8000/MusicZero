/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import MusicPlayer from './src/components/MusicPlayer';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  async function setupTrackPlayer()  {
    const player = await TrackPlayer.setupPlayer();
    const track = {
      url: require('./music_files/music_1.mp3'), 
      title: 'Test',
      artist: 'test',
    };
    await TrackPlayer.add([track]);
    setIsLoaded(true);
  };

  useEffect(() => {
    setupTrackPlayer();
  },[]);


  if (!isLoaded) {
    return <View style={styles.loadingView}>
      <Text>Loading...</Text>
    </View>
  }
  

  return (
    <SafeAreaView style={styles.safeArea}>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
       >
          <Text style={styles.headerStyle}>Music Zero App</Text>
          <MusicPlayer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  safeArea: {
    padding: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  headerStyle: {
    fontSize: 36,
    textAlign:'center'
  },
  loadingView: {
    flex: 1,
    height: Dimensions.get('window').height,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
});

export default App;
