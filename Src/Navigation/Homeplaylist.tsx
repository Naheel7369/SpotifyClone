
import {  GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from '../Screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Playlist from '../Screens/Playlist';
import MusicPlayer from '../Screens/MusicPlayer';


const Stack=createStackNavigator();

function HomePlaylistScreenStack() {
  return (
    <GestureHandlerRootView>
    <Stack.Navigator>
      <Stack.Screen
        name="Home screen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlayList"
        component={Playlist}
        options={{headerShown: true}}
      />
       <Stack.Screen
        name="MusicPlayer"
        component={MusicPlayer}
        options={{
          headerShown: true,
          presentation:'modal',
          headerStyle: {
            backgroundColor: '#696060',
          },
          headerTintColor: '#fff', 
        }}
           />
    </Stack.Navigator>
    </GestureHandlerRootView>
  );
}

export default HomePlaylistScreenStack;