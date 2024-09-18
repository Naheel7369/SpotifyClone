import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  SectionList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../Utils/Color';
import styles from './Style';
import { Categories, Genre } from '../../Api'; // Ensure you import the correct API function

// Array of 10 colors
const colorArray = [
  '#FF5733',
  '#33FF57',
  '#3357FF',
  '#F333FF',
  '#FF33A2',
  '#33FFF5',
  '#F0FF33',
  '#FF8333',
  '#33FF9A',
  '#9A33FF',
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomIndex];
};

const SearchScreen = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]); 
  const [error, setError] = useState(null);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
  setLoading(true);
  setError(null);
  try {
    const data = await Categories(); 
    console.log(data); // Log the entire data object to check the structure
    const fetchedCategories = data?.items?.map((category: any, index: number) => ({
      id: `category-${index}`, 
      name: category.name, // Assuming each category object has a "name" property
    }));

    setCategories(fetchedCategories || []); // Set categories state
  } catch (err) {
    setError('Failed to fetch categories. Check console for more details.');
    console.error(err);
  } finally {
    setLoading(false); 
  }
};


    const fetchGenres = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await Genre(); 
        const fetchedGenres = data?.genres?.map(
          (genre: any, index: number) => ({
            id: `genre-${index}`, // Ensure unique ID
            name: genre,
          }),
        );
        setGenre(fetchedGenres || []); // Set genres state
      } catch (err) {
        setError('Failed to fetch genres. Check console for more details.');
        console.error(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchGenres();
    fetchCategories(); // Call the function to fetch categories
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  // Render a tile for each genre
  const renderGenreTile = ({ item }) => (
    <Pressable style={[styles.genreTile, { backgroundColor: getRandomColor() }]}>
      <Text style={styles.genreTileText}>{item.name}</Text>
    </Pressable>
  );

  // Render a tile for each category (fetched data)
  const renderCategoryTile = ({ item }) => (
    <Pressable style={[styles.genreTile, { backgroundColor: getRandomColor() }]}>
      <Text style={styles.genreTileText}>{item.name}</Text>
    </Pressable>
  );

  // Data for SectionList
  const sections = [
    {
      title: 'Your top genres',
      data: genre, // Use the genre state here
      renderItem: renderGenreTile,
    },
    {
      title: 'Browse Categories',
      data: categories,
      renderItem: renderCategoryTile,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header with Search */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Search</Text>
        <View style={styles.searchBar}>
          <Icon
            name="search-outline"
            size={20}
            color={Colors.primary150}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={Colors.primary150}
          />
        </View>
      </View>

      {/* SectionList to display both genres and categories */}
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => `${item.id}-${index}`} // Unique key extractor
        contentContainerStyle={styles.contentContainer}
        renderItem={({ section, item }) => section.renderItem({ item })}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ minWidth: '100%' }}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;
