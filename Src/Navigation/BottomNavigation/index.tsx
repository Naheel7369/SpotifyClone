import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../Screens/Home';
import Search from '../../Screens/Search';
import Library from '../../Screens/Library';
import { Colors } from '../../Utils/Color';
import PlayList from '../../Screens/Playlist';
import HomePlaylistScreenStack from '../Homeplaylist';
Colors
const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:Colors.primary150 ,
        tabBarInactiveTintColor: Colors.tab1,
        tabBarActiveBackgroundColor: Colors.tab2,
        tabBarLabelStyle: {fontSize: 14},
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          borderTopWidth: 0,
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home Screen"
        component={HomePlaylistScreenStack}
        options={{headerShown: false,
          tabBarIcon: ({color, size}) => {
            return(
              <Ionicons name='home' color={color} size={size}/>
            )
          },
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Search Screen"
        component={Search}
        options={{headerShown: false,
          tabBarIcon: ({color, size}) => {
            return(
              <Ionicons name='search' color={color} size={size}/>
            )
          },
          tabBarLabel: 'Search',
        }}
      />
       {/* <Tab.Screen
        name="PlayList Screen"
        component={PlayList}
        options={{headerShown: false,
          tabBarIcon: ({color, size}) => {
            return(
              <Ionicons name="library-outline" color={color} size={size}/>
            )
          },
          tabBarLabel: 'PlayList',
        }}
      />  */}
       
        
        
    </Tab.Navigator>
  );
}
export default  BottomTabNavigation;
