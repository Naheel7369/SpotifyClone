import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from '../BottomNavigation';
import {AuthNavigation} from '../AuthNavigation';
import {useSelector} from 'react-redux';
import {State} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  const Authstate = useSelector((state: any) => state.Authentication);
  console.log('Auth');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!Authstate.loggedIn ? (
          <Stack.Screen
            name="AuthNavigation"
            component={AuthNavigation}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={BottomTabNavigation}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
