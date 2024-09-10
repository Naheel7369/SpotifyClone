import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';
import BootSplash from 'react-native-bootsplash';
import Login from './Src/Screens/Auth/Login';
import  Signup  from './Src/Screens/Auth/Signup';
import LoginForm from './Src/Screens/Auth/LoginForm';

enableScreens();

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login Screen"
          component={Login}
          options={{headerShown: false}}
        />
       <Stack.Screen
       name='Signup Screen'
       component={Signup}
       options={{headerShown: false}}
       
       />

<Stack.Screen
       name='Login Form'
       component={LoginForm}
       options={{headerShown: false}}
       
       />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;