import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Styles';
import {image} from '../../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import {Singers} from '../../Api'; 

const PlaylistScreen = ({route}) => {
  const {albumId, albumName} = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tracks, setTracks] = useState<any[]>([]); // Update state variable to hold tracks

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await Singers(albumId); 
        const albumTracks = response?.items; // Extract track items from the response
        const notracks =response?.items.length;
        console.log("NO of Tracks======>",notracks);
        const time=response?.tracks?.items?.duration_ms;
        console.log("Full response:", time);


        if (albumTracks && Array.isArray(albumTracks)) {
          const formattedTracks = albumTracks.map((track: any) => ({
            id: track.id,
            title: track.name,
            artist: track.artists.map((artist: any) => artist.name).join(', '),
            length:track.length,
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

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('MusicPlayer',{
        trackId: item.id,
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
        <TouchableOpacity style={styles.playlistButton}>
          <Image
            source={image.dot}
            style={{marginHorizontal: '3%', marginTop: '3%', marginRight: '1%'}}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Artist Image */}
      <Image source={image.LP} style={styles.artistImage} />

      {/* Title Section */}
      <Text style={styles.title}>{albumName}</Text>

      {/* Spotify Logo */}
      <Image source={image.small} style={styles.spotifyLogo} />

      <View style={{flexDirection:'row'}}>
      <Text style={styles.TotalTracks}> Total Tracks:{tracks.length}</Text>
      <Text style={styles.subtitle}>  3h 45min</Text>
      </View>
      {/* Playlist */}
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
