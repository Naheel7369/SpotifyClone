import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      padding: 20,
    },
    artistImage: {
      width: '100%',
      height: 250,
      resizeMode: 'cover',
    },
    title: {
      color: 'white',
      fontSize: 18,
      marginTop: 10, // Adjusted top margin for space after logo
      marginLeft: 50, // Ensure the text is aligned after the logo
      textAlign: 'left', // Align the text to the left
    },
    spotifyLogo: {
        marginHorizontal: 16,
      marginRight: 10, // Space between logo and text
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
  });
  