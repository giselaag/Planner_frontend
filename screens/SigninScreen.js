
import { Button, StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { MainButton, SecondaryButton } from '../components/Button';
import globalStyles from '../styles/GlobalStyles';
import  CustomInput  from '../components/Input';
import { useState } from "react";
import {SignIn} from "../api/auth"


export default function SigninScreen({ navigation }) {
  const apiUrl = process.env.EXPO_PUBLIC_BACKEND_IP;

  const [signinUsername, setSigninUsername] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

//EXISTING ACCOUNT

const handleLogin = () => {
  fetch(`${apiUrl}/users/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: signinUsername,
      password: signinPassword,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.result) {
        console.log("navigating");
        navigation.navigate("TabNavigator");
      } else {
        console.log(data.message);
      }
    });
};

 return (
  <KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={globalStyles.container}
>
     <Text>Signin Screen</Text>
     <CustomInput value={signinUsername} onChangeText={setSigninUsername} placeholder="username" />
      <CustomInput value={signinPassword} onChangeText={setSigninPassword} placeholder="password" />
      <MainButton
        title="Sign in"
        onPress={() => handleLogin()} 
      />
     <Text>No account yet?</Text>
     
     <SecondaryButton
        title="Create an account"
        onPress={() => navigation.navigate('Signup')}
      />
   </KeyboardAvoidingView>
 );
}