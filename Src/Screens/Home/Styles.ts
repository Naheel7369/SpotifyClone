import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Color";

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
    marginBottom: 10, 
  },
  madeForYouTile: {
    width: 180,
    alignItems: 'center',
  },
  madeForYouImage: {
    width: '90%',
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
  },
  artistName: {
    color: Colors.primary150,
    fontSize: 14,
    fontWeight: '500',
    width:100,
  
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary150,
    marginBottom:4, 
  },
  songItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  songImage: {
    width: 120,
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
  },
  songName: {
    color: Colors.primary150,
    fontSize: 14,
    fontWeight: 'bold',
    width:100,
  },
  // eleaseItem: {
  //   padding: 15,
  //   // marginVertical: 5,
  //   marginHorizontal: 10,
  //   borderRadius: 10,
  //   backgroundColor: '#2E2E2E',
  //   borderColor: '#444',
  //   borderWidth: 1,
  // },
  // releaseName: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: '#FFF',
  // },
  // releaseDate: {
  //   fontSize: 14,
  //   color: '#B0B0B0',
  //   marginTop: 5,
  // },
  MFY:{
 fontSize:16,
 fontWeight:"bold",
 color: '#FFF',
  },
});

export default styles;

