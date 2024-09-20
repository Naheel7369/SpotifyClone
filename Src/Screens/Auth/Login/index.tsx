import {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {Login} from '../../../Interfaces';
import CustomButton from '../../../Components/Button';
import {image} from '../../../Assets/Images';
import {styles} from './Style';


const LoginScreen: FC<Login> = ({navigation}) => {
  function SignupNavigationHandler() {
    navigation.navigate('Signup Screen');
  }
  function LoginNavigationHandler() {
    navigation.navigate('Login Form');
  }
  

  return (
    <View style={styles.contianer}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={image.Login} />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>Millions of songs Free on Spotify.</Text>
      </View>

      <CustomButton onPress={SignupNavigationHandler} >Signup for free</CustomButton>

      <CustomButton
        Buttonstyle={styles.Buttonstyle}
        Backstyle={styles.Backstyle}
        Istyle={styles.Phonestyle}
        image={image.phone}>
        Continue with phone number
      </CustomButton>
      <CustomButton
        Buttonstyle={styles.Buttonstyle}
        Backstyle={styles.Backstyle}
        Istyle={styles.Googlestyle}
        image={image.google}>
        Continue with Google
      </CustomButton>
      <CustomButton
        Buttonstyle={styles.Buttonstyle}
        Backstyle={styles.Backstyle}
        Istyle={styles.Facebookstyle}
        image={image.facebook}>
        Continue with facebook
      </CustomButton>
      <CustomButton
        Buttonstyle={styles.Buttonstyle}
        Backstyle={{backgroundColor: 'black'}}
        onPress={LoginNavigationHandler}
        >
        Login
      </CustomButton>
    </View>
  );
};

export default LoginScreen;
function Api() {
  throw new Error('Function not implemented.');
}

