import React from 'react';
import { View, Text, TextInput, Pressable, SectionList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../Utils/Color';
import styles from './Style';

// Array of 10 colors
const colorArray = [
  '#FF5733', // Red-Orange
  '#33FF57', // Green
  '#3357FF', // Blue
  '#F333FF', // Purple
  '#FF33A2', // Pink
  '#33FFF5', // Teal
  '#F0FF33', // Yellow
  '#FF8333', // Orange
  '#33FF9A', // Aqua
  '#9A33FF', // Violet
];

// Function to pick a random color from the array
const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomIndex];
};

const SearchScreen = () => {
  // Dummy data for Your top genres
  const genresData = [
    { id: '1', name: 'Pop' },
    { id: '2', name: 'Bollywood' },
  ];

  const topTilesData = [
    {
      title: 'Browse All',
      data: [
        { id: '1', name: 'Podcast' },
        { id: '2', name: 'New Release' },
        { id: '3', name: 'Jazz' },
        { id: '4', name: 'Classical' },
        { id: '5', name: 'Electronic' },
        { id: '6', name: 'Rock' },
        { id: '7', name: 'Rocks' },
        
      ]
    }
  ];

  // Render each genre tile with a color from the array
  const renderGenreTile = ({ item }) => (
    <Pressable style={[styles.genreTile, { backgroundColor: getRandomColor() }]}>
      <Text style={styles.genreTileText}>{item.name}</Text>
    </Pressable>
  );

  // Render each top tile with a color from the array
  const renderTopTile = ({ item }) => (
    <Pressable style={[styles.topTile, { backgroundColor: getRandomColor() }]}>
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
      <SectionList
        sections={topTilesData}
        keyExtractor={(item) => item.id}
        renderItem={renderTopTile}
        contentContainerStyle={styles.contentContainer}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{minWidth : '100%'}}>
            <Text style={styles.sectionTitle}>{title}</Text>
            </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;
