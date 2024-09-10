

import {StyleSheet} from 'react-native';
import { Colors } from '../../Utils/Color';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary50,
    borderRadius: 30,
    padding: 14,
    marginHorizontal: 35,
    marginBottom: 5,
  },
  textStyle: {
    color: Colors.primary100,
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  ImgTextContainer: {
    flexDirection: 'row',
    height: 25
  },
  pressed:{
    opacity: 0.5
  },

});