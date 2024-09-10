

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Black background
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    // borderRadius:8,
  },
  logo: {
    height: 100, // Large logo size
    width: 250,
    marginBottom: 30,
  },
  instructionText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#333",
    borderRadius: 16,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#fff",

  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#1DB954", // Red for Cancel
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  signUpButton: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#1DB954", // Spotify Green for Sign Up
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
  },
  loginButton: {
    color: "#1DB954", // Spotify Green
    fontSize: 16,
    marginLeft: 5,
  },
});
