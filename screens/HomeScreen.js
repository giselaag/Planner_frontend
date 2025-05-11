import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from 'react';
import globalStyles from "../styles/GlobalStyles";
import { MainButton } from "../components/Button";

export default function HomeScreen({ navigation }) {

  return (
    <View
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={globalStyles.container}
    >
      <Text>Home Screen</Text>
 
      <Text>
        Show previous plans, maybe an idea of what to do close to you
        (ticketmaster)
      </Text>
      <MainButton
        title="Begin now!"
        onPress={() => navigation.navigate("Filters")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
