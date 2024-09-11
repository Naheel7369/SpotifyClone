import { NavigationAction } from "@react-navigation/native";
import { ReactNode } from "react";
import { GestureResponderEvent, ImageSourcePropType, ImageStyle, ViewStyle } from "react-native";

export interface Button{
        children?: string;
        Buttonstyle?: object;
        Backstyle?: object;
        image?: ImageSourcePropType ;
        Istyle?: object;
        Cstyle?: object
        onPress?: () => void;
      };


export interface Login{
    navigation?:any,
}


export interface IC{
    
}

export interface Home{

}

export interface Isearch{

}

export interface ILibrary{

}