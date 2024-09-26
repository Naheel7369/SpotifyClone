import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './Styles';
import {image} from '../../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import {Singers} from '../../Api';
import Share from 'react-native-share';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PlaylistScreen = ({route}) => {
  const {albumId, albumName} = route.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tracks, setTracks] = useState<any[]>([]);
  const [formattedTime, setFormattedTime] = useState('');
  const translateY = useSharedValue(0);
  useEffect(() => {
    navigation.setOptions({
      headerleft: () => (
        <Animated.View style={[animatedHeaderStyle, { backgroundColor: '#030303', width: '420%',height:'100%' }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons
                color={'white'}
                size={42}
                name="chevron-left"
              />
              <Animated.Text style={{ color: 'white', fontSize: 24, }}>
                {albumName}
              </Animated.Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      ),
      headerTitle: '', 
      headerTitleAlign:'center',
    });
  }, [navigation, translateY.value, albumName]);
  
  const animatedHeaderStyle = useAnimatedStyle(() => {
    const opacity = interpolate(translateY.value, [150, 200], [0, 1], 'clamp');
    return {
      opacity,
    };
  });


  const scrollHandler = useAnimatedScrollHandler(event => {
    translateY.value = event.contentOffset.y;
  });

 


  const animatedImagestyle = useAnimatedStyle(() => {
    const scale = interpolate(translateY.value, [0, 400], [1, 0.5], 'clamp');
    const opacity = interpolate(translateY.value, [0, 150], [1, 0], 'clamp');
    return {
      transform: [{scale}],
      opacity,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const tran = interpolate(translateY.value, [0, 170], [0, -100], 'clamp');
    return {
      transform: [{translateY: tran}],
    };
  });

  const animatedUpStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateY.value * 0.5,
      [0, 100],
      [1, 0.2],
      'clamp',
    );
    const opacity = interpolate(translateY.value, [0, 150], [1, 0], 'clamp');
    return {
      transform: [{scale}],
      opacity,
    };
  });


  const handleImagePress = (track: any) => {
    const options = {
      title: 'Share Track',
      message: `Check out this track: ${track.title}`,
      url: track.preview_url,
    };

    Share.open(options)
      .then(res => {
        console.log('Shared successfully:', res);
      })
      .catch(err => {
        console.error('Share error:', err);
      });
  };

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        console.log('Fetching tracks for album:', albumId);
        const response = await Singers(albumId);
        console.log('API Response:', response);

        const albumTracks = response?.items;

        if (albumTracks && Array.isArray(albumTracks)) {
          const filteredTracks = albumTracks.filter(
            (track: any) => track.preview_url,
          );
          console.log('Filtered Tracks:', filteredTracks);

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
        console.error('API fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, [albumId,albumName]);

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

  console.log('Fetched Tracks:', tracks);

  return (
    <Animated.ScrollView
      style={styles.container}
      onScroll={scrollHandler}
      scrollEventThrottle={16}>
      <Animated.View style={animatedUpStyle}>
        <Animated.Image
          source={image.LP}
          style={[styles.artistImage, animatedImagestyle]}
        />
      </Animated.View>
      <Animated.View style={animatedTextStyle}>
        <Text style={styles.title}>{albumName}</Text>
        <Image source={image.small} style={styles.spotifyLogo} />

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.subtitle}>Total Tracks: {tracks.length}</Text>
          <Text style={styles.subtitle}>Time: {formattedTime}</Text>
        </View>

        {tracks.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.navigate('MusicPlayer', {
                trackId: item.id,
                playlist: tracks,
              })
            }
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
              <TouchableOpacity
                onPress={() => handleImagePress(item)}
                style={styles.playlistButton}>
                <Image
                  source={image.dot}
                  style={{
                    marginHorizontal: '3%',
                    marginTop: '3%',
                    marginRight: '1%',
                  }}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </Animated.ScrollView>
  );
};

export default PlaylistScreen;
