import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Styles';
import { Colors } from '../../Utils/Color';
import { image } from '../../Assets/Images'; 
import { useNavigation } from '@react-navigation/native';
import { Releases, Songs, Tracks } from '../../Api';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [albums, setAlbums] = useState<any[]>([]); // State for albums
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [Track, setTrack] = useState<any[]>([]);
  const [Song, setSong] = useState<any[]>([]);

  
  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await Releases(); // Call the API to get album releases
        const fetchedAlbums = response?.albums?.items.map((album: any) => ({
          id: album.id,
          name: album.name,
          releaseDate: album.release_date,
          image: album.images[0]?.url,  
        }));
        setAlbums(fetchedAlbums || []);
      } catch (err) {
        setError('Failed to fetch albums. Check console for more details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    const fetchTracks = async () => {
      try {
        const response = await Tracks(); // Call the API to get track details
        console.log('Tracks response:', response); // Check the response structure

        // Check if items exist and are in the correct structure
        const fetchedTracks = response?.tracks?.map((track: any) => ({
          id: track.id,
          name: track.name,
          artist: track.artists.map((artist: any) => artist.name).join(', '),
        })) || [];
        setTrack(fetchedTracks);
      } catch (err) {
        setError('Failed to fetch tracks. Check console for more details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchSongs = async () => {
      try {
        const response = await Songs(); 
        console.log('Tracks response:', response); 
    
      
        const fetchedSongs = response?.tracks?.map((track: any) => ({
          id: track.id,
          name: track.name,
          artist: track.artists.map((artist: any) => artist.name).join(', '),
        })) || [];
        console.log('Fetched Songs:', JSON.stringify(fetchedSongs, null, 2));
        setSong(fetchedSongs);
      } catch (err) {
        setError('Failed to fetch tracks. Check console for more details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSongs();
    
    fetchTracks();

    fetchReleases(); // Fetch albums when the component mounts
  }, []);

  

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const trendingData = Track
  

  const topPicksData = Song
    

  const renderMadeForYouItem = ({ item }: any) => (
<TouchableOpacity 
  onPress={() => navigation.navigate('PlayList', {
    albumId: item.id,         
    albumName: item.name,  
  })}
>
  <View style={styles.madeForYouTile}>
    <Image source={image.LP} style={styles.madeForYouImage} />
    <Text style={styles.artistName}>{item.name}</Text>
  </View>
</TouchableOpacity>

);
console.log(albums,'hiiiiiii');




  const renderSongItem = ({ item }: any) => (
    <TouchableOpacity>
      <View style={styles.songItem}>
        <Image source={image.Numb} style={styles.songImage} />
        <Text style={styles.songName}>{item.name}</Text>
        <Text style={styles.artistName}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#3A3A3A', '#131212']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Made for you</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="notifications-outline" size={30} color={Colors.primary150} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="time-outline" size={30} color={Colors.primary150} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="settings-outline" size={30} color={Colors.primary150} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Made for You Section */}
      <View style={styles.madeForYouSection}>
        <FlatList
          horizontal
          data={albums}
          renderItem={renderMadeForYouItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Trending Now Section */}
      <Text style={styles.sectionTitle}>Trending now</Text>
      <FlatList
        horizontal
        data={trendingData}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* Top Picks Section */}
      <Text style={styles.sectionTitle}>Top picks for you</Text>
      <FlatList
        horizontal
        data={topPicksData}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

export default HomeScreen;
