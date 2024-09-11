import { StyleSheet } from 'react-native';
import { Colors } from '../../Utils/Color';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary150,
  },
  madeForYouSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  madeForYouTile: {
    width: '48%',
    alignItems: 'center',
  },
  madeForYouImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  artistName: {
    color: Colors.primary150,
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary150,
    marginBottom: 10,
  },
  songItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  songImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  songName: {
    color: Colors.primary150,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
