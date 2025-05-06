
import { Button, StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { MainButton, SecondaryButton } from '../components/Button';
import globalStyles from '../styles/GlobalStyles';
import { CustomInput } from '../components/Input';
import { useState } from "react";
import {SignIn} from "../api/auth"


export default function SigninScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //TO DO: repeat from signup

 return (
  <KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={globalStyles.container}
>
     <Text>Signin Screen</Text>
     <CustomInput value={email} onChangeText={setEmail} placeholder="email" />
      <CustomInput value={password} onChangeText={setPassword} placeholder="password" />
      <MainButton
        title="Sign in"
        onPress={() => navigation.navigate('Signup')}
      />
     <Text>No account yet?</Text>
     
     <SecondaryButton
        title="Create an account"
        onPress={() => navigation.navigate('Signup')}
      />
   </KeyboardAvoidingView>
 );
}