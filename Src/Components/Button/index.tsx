import {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import { styles } from './Styles';
import { Button } from '../../Interfaces';

const CustomButton: FC<Button> = ({
  children,
  Buttonstyle,
  Backstyle,
  image,
  Istyle,
  Cstyle,
  onPress,
}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        Backstyle,
        Cstyle,
        pressed && styles.pressed,
      ]}
      onPress={onPress}>
      <View style={styles.ImgTextContainer}>
        {image ? <Image style={Istyle} source={image} /> : null}
        <Text style={[styles.textStyle, Buttonstyle]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;