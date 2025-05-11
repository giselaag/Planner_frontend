import {
  Button,
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useState } from "react";
import globalStyles from "../styles/GlobalStyles";
import { MainButton } from "../components/Button";
import CustomInput from "../components/Input";

export default function SignupScreen({ navigation }) {
  const apiUrl = process.env.EXPO_PUBLIC_BACKEND_IP;
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [token, setToken] = useState("");

  //CREATE ACCOUNT

  const handleRegister = () => {
    console.log("register")
    console.log(apiUrl)
    fetch(`${apiUrl}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("try")
        console.log(data);
        if (data.result) {
          console.log("navigating");
          navigation.navigate("TabNavigator");
        } else if (!data.result) {
          console.log(data.message);
        }
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={globalStyles.container}
    >
      <Text>Signup Screen</Text>
      <CustomInput
        value={signUpUsername}
        onChangeText={setSignUpUsername}
        placeholder="email"
      />
      <CustomInput
        value={signUpPassword}
        onChangeText={setSignUpPassword}
        placeholder="password"
      />
      <MainButton title="Go to Home" onPress={() => handleRegister()} />
    </KeyboardAvoidingView>
  );
}
