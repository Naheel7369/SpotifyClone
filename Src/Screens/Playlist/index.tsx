import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './Styles';
import { image } from '../../Assets/Images';
import { useNavigation } from '@react-navigation/native';
import { Singers } from '../../Api'; 
import Share from 'react-native-share';

const PlaylistScreen = ({ route }) => {
  const { albumId, albumName } = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tracks, setTracks] = useState<any[]>([]);
  const [formattedTime, setFormattedTime] = useState('');

  const handleImagePress = (track: any) => {
    const options = {
      title: 'Share Track',
      message: `Check out this track: ${track.title}`, 
      url: track.preview_url, 
    };

    Share.open(options)
      .then((res) => {
        console.log('Shared successfully:', res);
      })
      .catch((err) => {
        console.error('Share error:', err);
      });
  };

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await Singers(albumId);
        const albumTracks = response?.items;
        
        if (albumTracks && Array.isArray(albumTracks)) {
          const filteredTracks = albumTracks.filter((track: any) => track.preview_url);
          const formattedTracks = filteredTracks.map((track: any) => ({
            id: track.id,
            title: track.name,
            artist: track.artists.map((artist: any) => artist.name).join(', '),
            length: track.length,
            Time: track.duration_ms,
            preview_url: track.preview_url, 
          }));

          setTracks(formattedTracks);
        } else {
          setError('No tracks available in this album.');
        }
      } catch (err) {
        setError('Failed to fetch songs. Check console for more details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, [albumId]);

  useEffect(() => {
    if (tracks.length === 0) return;

    const totalDurationMs = tracks.reduce((acc, track) => acc + track.Time, 0);
    const hours = Math.floor(totalDurationMs / 3600000);
    const minutes = Math.floor((totalDurationMs % 3600000) / 60000);
    const seconds = Math.floor((totalDurationMs % 60000) / 1000);
    const formatted = `${hours}h ${minutes}m ${seconds}s`;
    setFormattedTime(formatted);
  }, [tracks]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
  console.log('He===>',tracks)

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('MusicPlayer', {
        trackId: item.id,
        playlist: tracks,
      })}
      style={styles.card}>
      <View style={styles.playlistItem}>
        <Image source={image.BE} style={styles.playlistImage} />
        <View style={styles.playlistInfo}>
          <Text style={styles.playlistTitle}>{item.title}</Text>
          <View style={styles.artistContainer}>
            <Text style={styles.lyricsText}>LYRICS</Text>
            <Text style={styles.playlistArtist}>{item.artist}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => handleImagePress(item)} style={styles.playlistButton}>
          <Image
            source={image.dot}
            style={{ marginHorizontal: '3%', marginTop: '3%', marginRight: '1%' }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image source={image.LP} style={styles.artistImage} />
      <Text style={styles.title}>{albumName}</Text>
      <Image source={image.small} style={styles.spotifyLogo} />

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.subtitle}> Total Tracks: {tracks.length}</Text>
        <Text style={styles.subtitle}> Time: {formattedTime} </Text>
      </View>
      
      <FlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.playlist}
      />
    </View>
  );
};

export default PlaylistScreen;
