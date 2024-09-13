import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './Styles';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {image} from '../../Assets/Images';

const MusicPlayer = ({navigation}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const PlayHandler = () => {
    setIsPlaying(!isPlaying);
  };

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
  }, [navigation]);

  return (
    <View style={styles.container}>
    
      <Text style={styles.Textstyle}>PLAYING FROM SEARCH</Text>

      <Text style={styles.sub}>"stay" in Songs</Text>

      <Image source={image.LP} style={styles.artistImage} />

      <View style={{alignItems: 'center'}}>
        <Slider
          style={{width: 199, height: 40}}
          minimumValue={0}
          maximumValue={6}
          thumbTintColor="white"
          minimumTrackTintColor="#FFF"
          maximumTrackTintColor="#000000"
        />
      </View>

      <View style={styles.controlsRow}>
        <TouchableOpacity>
          <Image source={image.shu} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={image.Prev} />
        </TouchableOpacity>
        <TouchableOpacity onPress={PlayHandler}>
          <Ionicons
            name={isPlaying ? 'pause-circle' : 'play-circle'}
            size={40}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={image.Next} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={image.Loop} />
        </TouchableOpacity>
      </View>

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

        <TouchableOpacity>
          <Image source={image.share} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MusicPlayer;
