import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      padding: 20,
    },
    artistImage: {
      width: '80%',
      height: 250,
      resizeMode: 'cover',
      marginHorizontal:'10%',
      marginTop:'5%'
    },
    title: {
      color: 'white',
      fontSize: 19,
      marginTop: 10, // Adjusted top margin for space after logo
      // marginLeft: 50, // Ensure the text is aligned after the logo
      textAlign: 'center', // Align the text to the left
    },
    spotifyLogo: {
      marginBottom: 10,
      marginTop: 20,
    //   alignSelf: 'flex-start', // Align logo to the left
    },
    subtitle: {
        
      color: 'gray',
      fontSize: 16,
      textAlign: 'left',
      marginBottom: 20,
    },
    playButton: {
      backgroundColor: 'green',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      alignSelf: 'center',
      marginBottom: 20,
    },
    playButtonText: {
      color: 'white',
      fontSize: 16,
    },
    playlist: {
      marginTop: 20,
    },
    playlistItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    playlistImage: {
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    playlistInfo: {
      flex: 1,
      marginLeft: 15,
    },
    playlistTitle: {
      color: 'white',
      fontSize: 16,
    },
    playlistArtist: {
      color: 'gray',
      fontSize: 14,
    },
    playlistButton: {
      paddingHorizontal: 10,
    },
    playlistButtonText: {
      color: 'white',
      fontSize: 24,
    },
    button: {
      backgroundColor: 'transparent',
      width: 30,
      height: 30,
    },
    lyricsText: {
      backgroundColor: '#c5c4c4',
      color: 'black',
      paddingHorizontal: 3,
      fontSize: 10,
      textAlignVertical: 'center',
      fontWeight: 'bold',
      marginRight: 4,
      borderRadius: 2,
      height: 15,
      marginTop: 4,
    },
    artistContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    card: {
      // backgroundColor: '#1c1c1c', // Slightly lighter than the background for contrast
      borderRadius: 8,
      marginBottom: 15, // Space between cards
      padding: 15, // Padding inside the card
      
      elevation: 5, 
    },
    TotalTracks:{
    color: 'white',
    fontWeight:'bold',
    fontSize:14,
  },
});
  