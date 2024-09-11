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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    marginTop: 16,
  },
  genresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  genreTile: {
    width: 170, // Fixed width
    height: 100, // Fixed height
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  genreTileText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  topTileWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  topTile: {
    width:170 , // Fixed width
    height: 100, // Fixed height
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  topTileText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
