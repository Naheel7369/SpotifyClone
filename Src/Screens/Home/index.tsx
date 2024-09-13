import React from 'react';
import { View, Text, FlatList, Image, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Styles';
import { Colors } from '../../Utils/Color';
import { image } from '../../Assets/Images'; 
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
 const navigation=useNavigation();
 
  const madeForYouData = [
    { id: '1', name: 'Ed Sheeran', image: image.Ed }, 
    { id: '2', name: 'Linkin Park', image: image.LP }, 
  ];

  const trendingData = [
    { id: '1', name: 'Blinding Lights', artist: 'The Weeknd', image: image.End },
    { id: '2', name: 'Shape of You', artist: 'Ed Sheeran', image: image.Numb },
    { id: '3', name: 'In the End', artist: 'Linkin Park', image: image.End },
  ];

  const topPicksData = [
    { id: '1', name: 'Levitating', artist: 'Dua Lipa', image: image.Numb },
    { id: '2', name: 'Peaches', artist: 'Justin Bieber', image: image.End },
    { id: '3', name: 'Rockstar', artist: 'Post Malone', image: image.Numb },
  ];

  const renderMadeForYouItem = ({ item }:any) => (
    <TouchableOpacity onPress={()=>navigation.navigate('PlayList')}>
    <View style={styles.madeForYouTile}>
      <Image source={item.image} style={styles.madeForYouImage} />
      <Text style={styles.artistName}>{item.name}</Text>
    </View>
    </TouchableOpacity>
  );

  const renderSongItem = ({ item }:any) => (
    <TouchableOpacity>
    <View style={styles.songItem}>
      <Image source={item.image} style={styles.songImage} />
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
        {madeForYouData.map((item) => renderMadeForYouItem({ item }))}
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
