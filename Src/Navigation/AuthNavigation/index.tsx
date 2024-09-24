import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../Screens/Auth/Login';
import Signup from '../../Screens/Auth/Signup';
import LoginForm from '../../Screens/Auth/LoginForm';

const Stack = createNativeStackNavigator();
export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login Screen"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Signup Screen"
        component={Signup}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Login Form"
        component={LoginForm}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
