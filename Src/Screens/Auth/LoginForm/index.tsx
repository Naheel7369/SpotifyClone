import React, { useState } from "react";
import { Text, TextInput, View, Image, Pressable, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { image } from "../../../Assets/Images"; // Assuming the Spotify logo is imported here
import { styles } from "./Style";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Spotify Logo */}
      <Image style={styles.logo} source={image.Spotify} resizeMode="contain" />

      {/* Text Instruction */}
      <Text style={styles.instructionText}>Please enter your login details</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Buttons - Cancel and Login */}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Cancel"
            color="#1DB954" 
            onPress={() => navigation.goBack()} 
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Login"
            color="#1DB954" 
            onPress={() => navigation.navigate("Home")} 
          />
        </View>
      </View>

      {/* SignUp Option */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Signup Screen")}>
          <Text style={styles.signUpButton}>SignUp</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignInScreen;
