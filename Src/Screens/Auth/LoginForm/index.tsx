import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, Image, Pressable, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {image} from '../../../Assets/Images'; // Assuming the Spotify logo is imported here
import {styles} from './Style';
import {getToken} from '../../../Api';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../../../../Reducers/slice';


const SignInScreen = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

    const init = async () => {
     const  accesstoken = await getToken();
     console.log('acess Token======>',accesstoken)
    dispatch(loggedIn(accesstoken))
    }
     
    function HomeHandler(){
      navigation.navigate('Home'),
      init();
    
    
    };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={image.Spotify} resizeMode="contain" />

      <Text style={styles.instructionText}>
        Please enter your login details
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Cancel"
            color="#1DB954"
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={styles.button}>
          <Button title="Login" color="#1DB954" onPress={HomeHandler} />

          
        </View>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Signup Screen')}>
          <Text style={styles.signUpButton}>SignUp</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignInScreen;


