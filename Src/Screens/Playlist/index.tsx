import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import { styles } from './Styles';
import { image } from '../../Assets/Images';

const playlistData = [
  {
    id: '1',
    title: 'Song 1',
    artist: 'Imagine Dragons',
    image: image.BE,
  },
  {
    id: '2',
    title: 'Song 2',
    artist: 'Alan Walker',
    image: image.BE,
  },
  {
    id: '3',
    title: 'Song 3',
    artist: 'DJ Snake',
    image: image.BE,
  },
  {
    id: '4',
    title: 'Song 4',
    artist: 'Selena Gomez',
    image: image.BE,
  },
];

const renderItem = ({ item }) => (
  <Pressable style={styles.playlistItem}>
    <Image source={item.image} style={styles.playlistImage} />
    <View style={styles.playlistInfo}>
      <Text style={styles.playlistTitle}>{item.title}</Text>
      <Text style={styles.playlistArtist}>{item.artist}</Text>
    </View>
    <Pressable style={styles.playlistButton}>
      <Text style={styles.playlistButtonText}>{'...'}</Text>
    </Pressable>
  </Pressable>
);

const PlaylistScreen = () => {
  return (
    <View style={styles.container}>
      {/* Artist Image */}
      <Image source={image.LP} style={styles.artistImage} />

      {/* Title Text */}
      <Text style={styles.title}>
        Tune in to Top Tracks from Imagine Dragons, Alan Walker and many more
      </Text>

      {/* Spotify Logo */}
      <Image source={image.small} style={styles.spotifyLogo} />

      {/* Below the logo text */}
      <Text style={styles.subtitle}>191,165 likes . 3h 45min</Text>

      {/* Button (Example) */}
      <Pressable style={styles.playButton}>
      <Image source={image.Button} style={styles.button} />
      </Pressable>

      {/* Playlist */}
      <FlatList
        data={playlistData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.playlist}
      />
    </View>
  );
};



export default PlaylistScreen;
