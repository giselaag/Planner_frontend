import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import { MainButton } from "../components/Button";


export default function HomeScreen({ navigation }) {
 return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={globalStyles.container}
    >
        <Text>Home Screen</Text>
        <MainButton
        title="Go to Filters"
        onPress={() => navigation.navigate('Home')}
      />
        </KeyboardAvoidingView>
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