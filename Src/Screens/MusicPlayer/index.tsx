import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {styles} from './Styles';
import Slider from '@react-native-community/slider';
import {image} from '../../Assets/Images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {GettingSongs} from '../../Api';
import Sound from 'react-native-sound';
import Share from 'react-native-share';

const MusicPlayer = ({navigation, route}: any) => {
  const {trackId, playlist = []} = route.params;
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [track, setTrack] = useState<any>(null);
  const [position, setPosition] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [sound, setSound] = useState<Sound | null>(null);
  const [currentIndex, setcurrentIndex] = useState<number>(0);
  


  const handle = (track: any) => {
    if (!track || !track.preview_url) return; // Guard clause
    const options = {
      title: 'Share Track',
      message: `Check out this track: ${track.title}`,
      url: track.preview_url,
    };

    Share.open(options)
      .then((res: any) => {
        console.log('Shared successfully:', res);
      })
      .catch((err: any) => {
        console.error('Share error:', err);
      });
  };

  // Format time from seconds to minutes:seconds
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const PlayHandler = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play(success => {
          if (!success) {
            console.log('Playback failed due to audio decoding errors');
          }
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextTrack = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < playlist.length) {
      setcurrentIndex(nextIndex);
      fetchGettingSongs(playlist[nextIndex].id);
      setIsPlaying(false);
    } else {
      console.log('Reached end of playlist');
    }
  };

  const handlePrevTrack = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setcurrentIndex(prevIndex);
      fetchGettingSongs(playlist[prevIndex].id);
      setIsPlaying(false);
    } else {
      console.log('Reached beginning of playlist');
    }
  };

  useEffect(() => {
    if (sound && isPlaying) {
      const interval = setInterval(() => {
        sound.getCurrentTime(seconds => {
          setPosition(seconds);
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [sound, isPlaying]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Image source={image.dot} />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={image.arrow} />
        </TouchableOpacity>
      ),
      headerTitle: 'MusicPlayer',
    });
  }, [navigation, track]);

  const fetchGettingSongs = async songId => {
    try {
      const response = await GettingSongs(songId);
      if (response) {
        setTrack({
          id: response.id,
          title: response.name,
          artist: response.artists.map((artist: any) => artist.name).join(', '),
          preview_url: response.preview_url,
        });

        const music = new Sound(response.preview_url, null, error => {
          if (error) {
            console.log('Failed to load the sound', error);
            return;
          }
          setDuration(music.getDuration());
          setSound(music);
        });
      } else {
        setError('Track not found.');
      }
    } catch (err) {
      setError('Failed to fetch the song. Check console for more details.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGettingSongs(trackId);

    // Cleanup the sound on component unmount
    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, [trackId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Textstyle}>PLAYING FROM SEARCH</Text>

      {track?.albumImage ? (
        <Image source={{uri: track.albumImage}} style={styles.artistImage} />
      ) : (
        <Image source={image.LP} style={styles.artistImage} />
      )}

      <Text style={styles.art}>{track.title}</Text>
      <Text style={styles.sub}>By: {track.artist}</Text>

      {/* Timer above the slider */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <Text style={{color: 'white'}}>{formatTime(position)}</Text>
        <Text style={{color: 'white'}}>{formatTime(duration)}</Text>
      </View>

      {/* Slider */}
      <View style={{alignItems: 'center'}}>
        <Slider
          style={{width: 400, height: 44, marginBottom: '11%'}}
          minimumValue={0}
          maximumValue={duration}
          thumbTintColor="white"
          minimumTrackTintColor="#FFF"
          maximumTrackTintColor="#000000"
          value={position}
          onSlidingComplete={value => sound?.setCurrentTime(value)} // Seek when the user interacts with the slider
        />
      </View>

      {/* Music controls */}
      <View style={styles.controlsRow}>
        <TouchableOpacity>
          <Image source={image.shu} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePrevTrack}>
          <Image source={image.Prev} />
        </TouchableOpacity>
        <TouchableOpacity onPress={PlayHandler}>
          <MaterialCommunityIcons
            color={'white'}
            size={75}
            name={isPlaying ? 'pause-circle' : 'play-circle'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextTrack}>
          <Image source={image.Next} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={image.Loop} />
        </TouchableOpacity>
      </View>

      {/* Bottom controls */}
      <View style={styles.controlsRow}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity>
          <Image source={image.cast} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handle(track)}>
          <Image source={image.share} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MusicPlayer;
