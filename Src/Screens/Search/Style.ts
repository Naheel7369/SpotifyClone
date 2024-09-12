import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    marginTop: 16,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow wrapping
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  genreTile: {
    width: 170, // Fixed width
    height: 100, // Fixed height
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 16, // Add margin to separate tiles
  },
  genreTileText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  topTileWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  topTile: {
    width: 170, 
    height: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 16, // Add margin to separate tiles
  },
  topTileText: {
    color: '#fff',
    fontSize: 20, 
    fontWeight: 'bold', 
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default styles;
