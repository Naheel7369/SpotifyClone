import React from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Styles';
import { Colors } from '../../Utils/Color';
import { image } from '../../Assets/Images';

const HomeScreen = () => {
  // Dummy Data
  const madeForYouData = [
    { id: '1', name: 'Ed Shareen', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'LinkinPark', image: 'https://via.placeholder.com/150' },
    
    
  ];




  const trendingData = [
    { id: '1', name: 'Numb', artist: 'LinkinPark', image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'In The End', artist: 'LinkinPark', image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Hello', artist: 'LinkinPark ', image: 'https://via.placeholder.com/100' },
    { id: '4', name: 'Ashes', artist: 'LinkinPark', image: 'https://via.placeholder.com/100' },
    { id: '5', name: 'New', artist: 'LinkinPark', image: 'https://via.placeholder.com/100' },
    { id: '6', name: 'Luck', artist: 'LinkinPark ', image: 'https://via.placeholder.com/100' },
    
    
  ];

  const topPicksData = [
    { id: '1', name: 'New Divide', artist: 'LinkinPark ', image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Lately', artist: 'LinkinPark', image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Top Guns', artist: 'LinkinPark', image: 'https://via.placeholder.com/100' },
    { id: '4', name: 'Ashes', artist: 'LinkinPark', image: 'https://via.placeholder.com/100' },
    { id: '5', name: 'New', artist: 'LinkinPark', image: 'https://via.placeholder.com/100' },
    { id: '6', name: 'Luck', artist: 'LinkinPark ', image: 'https://via.placeholder.com/100' },
  ];

  // Render Tiles
  const renderMadeForYouItem = ({ item }: { item: { id: string; name: string; image: string } }) => (
    <View style={styles.madeForYouTile}>
      <Image source={ image.Ed } style={styles.madeForYouImage} />
      <Text style={styles.artistName}>{item.name}</Text>
      <Image source={ image.LP } style={styles.madeForYouImage} />
      <Text style={styles.artistName}>{item.name}</Text>
    </View>


  );

  // Render Trending/Top Picks Items
  const renderSongItem = ({ item }: { item: { id: string; name: string; artist: string; image: string } }) => (
    <View style={styles.songItem}>
      <Image source={image.Numb} style={styles.songImage} />
      <Text style={styles.songName}>{item.name}</Text>
      <Text style={styles.artistName}>{item.artist}</Text>
    </View>
  );

  return (
    <LinearGradient
      colors={['#3A3A3A', '#131212']} 
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Made for you</Text>
        <View style={styles.headerIcons}>
          <Pressable>
            <Icon name="notifications-outline" size={20} color={Colors.primary150} />
          </Pressable>
          <Pressable>
            <Icon name="time-outline" size={20} color={Colors.primary150} />
          </Pressable>
          <Pressable>
            <Icon name="settings-outline" size={20} color={Colors.primary150} />
          </Pressable>
        </View>
      </View>

      {/*  Your Section */}
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
