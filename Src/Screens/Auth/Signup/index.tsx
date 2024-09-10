import React, { useState } from "react";
import { Text, TextInput, View, Image, Pressable, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { image } from "../../../Assets/Images"; // Assuming the Spotify logo is imported here
import { styles } from "./Style";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Spotify Logo */}
      <Image style={styles.logo} source={image.Spotify} resizeMode="contain" />

      {/* Text Instruction */}
      <Text style={styles.instructionText}>Enjoy Listening To Music</Text>

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

      {/* Re-enter Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Re-enter Password"
        placeholderTextColor="#ccc"
        value={repassword}
        onChangeText={setRepassword}
        secureTextEntry
      />

      {/* {/* Remember Me Text
      <Text style={styles.rememberMeText}>Remember Me</Text> */}

      {/* Buttons - Cancel and Sign Up */}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Cancel"
            color="#1DB954" // Color for the Cancel button
            onPress={() => navigation.goBack()} // Navigate back to the welcome screen */}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Sign Up"
            color="#1DB954" // Spotify Green for the Sign Up button
            onPress={() => navigation.navigate("Login Form")} // Navigate to Home on signup
          />
        </View>
      </View>

      {/* Login Option */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login Form")}>
          <Text style={styles.loginButton}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpScreen;
