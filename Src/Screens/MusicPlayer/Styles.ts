import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      paddingHorizontal: 10,
      paddingTop: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dotsIcon: {
      width: 24,
      height: 24,
    },
    Textstyle: {
      color: 'white',
      fontSize: 20,
      textTransform: 'uppercase',
      marginHorizontal:'20%',
      margin:3
    },
    sub: {
      color: '#fff',
      fontSize: 16,
      marginTop: 4,
      marginBottom: 10,
      alignSelf:'center',
    },
    artistImage: {
      width: 400,
      height: 300,
      borderRadius: 20,
      alignSelf: 'center',
      marginBottom: 20,
    },
    titleRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    songTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    heartIcon: {
      width: 24,
      height: 24,
    },
    artistNames: {
      fontSize: 18,
      color: '#b3b3b3',
      marginBottom: 20,
    },
    slider: {
      width: '100%',
      height: 40,
      marginVertical: 20,
    },
    controlsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginBottom: 50,
    },
    controlIcon: {
      width: 24,
      height: 24,
      tintColor: '#fff', 
    },
    playPauseIcon: {
      width: 40,
      height: 40,
      tintColor: '#fff',
    },
    art:{
  alignSelf:"center",
  fontWeight:'bold',
  fontSize:25,  
  color:'white',
    },
  });
  