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
import {Singers} from '../../Api'; // Assuming you have Singers function in the Api file.

const PlaylistScreen = ({route}) => {
  const {albumId, albumName} = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sing, setSings] = useState<any[]>([]);
  // console.log('albumName========================', albumName);

  useEffect(() => {
    const fetchSinger = async () => {
      try {
        const response = await Singers();
  
        // Log the full response to inspect its structure
        console.log('Fetched tracks playlist:', JSON.stringify(response, null, 2));
  
        // Check and log specific paths for tracks data
        const tracks = response?.tracks?.items 
  
        if (tracks && Array.isArray(tracks)) {
          const fetchedSing = tracks.map((track: any) => ({
            id: track.id,
            title: track.name,
            artist: track.artists.map((artist: any) => artist.name).join(', '),
          }));
          setSings(fetchedSing);
        } else {
          setError('No tracks available in the response.');
        }
      } catch (err) {
        setError('Failed to fetch songs. Check console for more details.');
        console.error(err);
      } 
        finally {
          setLoading(false);
        }
    };
  
    fetchSinger(); // Fetch songs when the component mounts
  }, []);
  



  // Return a loader while fetching data
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Display error if there's any
  if (error) {
    return <Text>{error}</Text>;
  }
  // console.log(sing,'helll')

  // Render each item of the playlist
  const renderItem = ({item}: any) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('MusicPlayer')}
      style={styles.card}>
      <View style={styles.playlistItem}>
        <Image source={image.BE} style={styles.playlistImage} />
        {/* You can replace with dynamic images */}
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
       
          <Text style={styles.title}> 
          {albumName}
            </Text> 
        
  
        {/* Spotify Logo */}
        <Image source={image.small} style={styles.spotifyLogo} />
  
        {/* Below the logo text */}
        <Text style={styles.subtitle}>191,165 likes · 3h 45min</Text>
  
        {/* Playlist */}
        <FlatList
          data={sing}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.playlist}
        />
      </View>
    );
  
};

export default PlaylistScreen;
