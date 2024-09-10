import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Black background
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
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
    borderRadius: 5,
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
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signUpText: {
    color: "#fff",
    fontSize: 16,
  },
  signUpButton: {
    color: "#1DB954", // Spotify Green for SignUp button
    fontSize: 16,
    marginLeft: 5,
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#1DB954", 
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
});
