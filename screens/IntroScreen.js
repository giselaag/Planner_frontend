import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MainButton } from "../components/Button";
import globalStyles from "../styles/GlobalStyles";
import typography from "../styles/Typography";

export default function IntroScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={globalStyles.container}
    >
      <Text style={typography.h2}>
        Tell us your vibe, your time and your budget we'll suggest your next
        move.
      </Text>
      <MainButton title="Start planning" onPress={() => navigation.navigate("Signin")} />
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
