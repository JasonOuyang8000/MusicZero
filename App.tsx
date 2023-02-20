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
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import { theme as baseTheme } from './src/theme';


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
    <SafeAreaProvider>
       <ThemeProvider theme={baseTheme}>
          <MusicPlayer />
      </ThemeProvider>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
  loadingView: {
    alignItems: 'center',
    justifyContent:'center'
  }
});

export default App;
