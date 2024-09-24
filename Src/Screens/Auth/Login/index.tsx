import {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {Login} from '../../../Interfaces';
import CustomButton from '../../../Components/Button';
import {image} from '../../../Assets/Images';
import {styles} from './Style';
import {btnArr} from '../../../Utils/Constant';

const LoginScreen: FC<Login> = ({navigation}) => {
  function SignupNavigationHandler() {
    navigation.navigate('Signup Screen');
  }
  function LoginNavigationHandler() {
    console.log('naheel');
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
      <>
        {btnArr.map((val, index) => (
          <CustomButton
            onPress={val?.onPress}
            key={val?.id}
            Buttonstyle={index != 0 && styles.Buttonstyle}
            Backstyle={index != 0 && styles.Backstyle}
            Istyle={index != 0 && styles.Facebookstyle}
            image={val?.image}>
            {val?.txt}
          </CustomButton>
        ))}
      </>
      <CustomButton
        Buttonstyle={styles.Buttonstyle}
        Backstyle={{backgroundColor: 'black'}}
        onPress={LoginNavigationHandler}>
        Login
      </CustomButton>
    </View>
  );
};

export default LoginScreen;
function Api() {
  throw new Error('Function not implemented.');
}
