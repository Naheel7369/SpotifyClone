import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";
import { image } from "../../Assets/Images";
import { useNavigation } from "@react-navigation/native";

const PlaylistScreen = () => {
  const navigation=useNavigation();


  const playlistData = [
    {
      id: '1',
      title: 'Thunder',
      artist: 'Imagine Dragons',
      image: image.BE,
    },
    {
      id: '2',
      title: 'Faded',
      artist: 'Alan Walker',
      image: image.BE,
    },
    {
      id: '3',
      title: 'Lean On',
      artist: 'DJ Snake',
      image: image.BE,
    },
    {
      id: '4',
      title: 'Wolves',
      artist: 'Selena Gomez',
      image: image.BE,
    },
  ];
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={()=>navigation.navigate('MusicPlayer')} style={styles.card}>
      <View style={styles.playlistItem}>
        <Image source={item.image} style={styles.playlistImage} />
        <View style={styles.playlistInfo}>
          <Text style={styles.playlistTitle}>{item.title}</Text>
          <View style={styles.artistContainer}>
            <Text style={styles.lyricsText}>LYRICS</Text>
            <Text style={styles.playlistArtist}>{item.artist}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.playlistButton}>
          <Image source={image.dot} style={{marginHorizontal: '3%', marginTop: '3%', marginRight: '1%'}} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      {/* Artist Image */}
      <Image source={image.LP} style={styles.artistImage} />

      {/* Title Text */}
      <Text style={styles.title}>
        Tune in to Top Tracks from Imagine Dragons, Alan Walker and many more
      </Text>

      {/* Spotify Logo */}
      <Image source={image.small} style={styles.spotifyLogo} />

      {/* Below the logo text */}
      <Text style={styles.subtitle}>191,165 likes . 3h 45min</Text>

      {/* Button Section */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', marginTop: '3.5%'}}>
          <TouchableOpacity>
            <Image style={{marginRight: '15%'}} source={image.heart} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{marginHorizontal: '10%', marginTop: '3%'}} source={image.dot} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={image.req} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Playlist */}
      <FlatList
        data={playlistData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.playlist}
      />
    </View>
  );
};

export default PlaylistScreen;
