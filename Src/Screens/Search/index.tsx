import React from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../Utils/Color'; 
import styles from './Style';

const SearchScreen = () => {
  // Dummy data for Your top genres and Your top
  const genresData = [
    { id: '1', name: 'Pop', color: '#9e2c8b' }, // Coral color for Pop
    { id: '2', name: 'Bollywood', color: '#6495ED' }, // Cornflower Blue for Bollywood
  ];

  const topTilesData = [
    { id: '1', name: 'Podcast', color: '#FF6347' }, // Tomato
    { id: '2', name: 'New Release', color: '#FFD700' }, // Gold
    { id: '3', name: 'Jazz', color: '#DA70D6' }, // Orchid
    { id: '4', name: 'Classical', color: '#98FB98' }, // PaleGreen
    { id: '5', name: 'Electronic', color: '#40E0D0' }, // Turquoise
  ];

  // Render each genre tile with its background color
  const renderGenreTile = ({ item }: { item: { id: string; name: string; color: string } }) => (
    <Pressable style={[styles.genreTile, { backgroundColor: item.color }]}>
      <Text style={styles.genreTileText}>{item.name}</Text>
    </Pressable>
  );

  // Render each top tile with its background color
  const renderTopTile = ({ item }: { item: { id: string; name: string; color: string } }) => (
    <Pressable style={[styles.topTile, { backgroundColor: item.color }]}>
      <Text style={styles.topTileText}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Header with Search */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Search</Text>
        <View style={styles.searchBar}>
          <Icon name="search-outline" size={20} color={Colors.primary150} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={Colors.primary150}
          />
        </View>
      </View>

      {/* Your Top Genres */}
      <Text style={styles.sectionTitle}>Your top genres</Text>
      <View style={styles.genresContainer}>
        {genresData.map((item) => renderGenreTile({ item }))}
      </View>

      {/* Browse All */}
      <Text style={styles.sectionTitle}>Browse All</Text>
      <FlatList
        data={topTilesData}
        renderItem={renderTopTile}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.topTileWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;

