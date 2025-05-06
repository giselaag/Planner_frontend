import {
  Button,
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { useState } from "react";
import globalStyles from "../styles/GlobalStyles";
import { CustomInput } from "../components/Input";
import { MainButton } from "../components/Button";
import {Register} from "../api/auth";

export default function SignupScreen({ navigation }) {
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [token, setToken] = useState("");

  const handleRegister = async () => {
    try {
      const data = await Register(signUpUsername, signUpPassword);
      Alert.alert('Success', 'Signup successful!');
      console.log(data);
      setToken(data.token);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };


  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={globalStyles.container}
    >
      <Text>Signup Screen</Text>
      <CustomInput value={signUpUsername} onChangeText={setSignUpUsername} placeholder="email" />
      <CustomInput value={signUpPassword} onChangeText={setSignUpPassword} placeholder="password" />
      <MainButton
        title="Go to Home"
        onPress={() => handleRegister()}
      />
    </KeyboardAvoidingView>
  );
}
