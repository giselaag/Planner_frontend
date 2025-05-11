import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Colors from "../styles/Colors";

export default function CustomInput(props) {
  const { validator, onChangeText, style, ...rest } = props;

  const handleChange = (rawText) => {
    //check if there is a validator function in parent
    const text = validator ? validator(rawText) : rawText;
    onChangeText && onChangeText(text); //use clean text
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        {...rest}
        onChangeText={handleChange}
        style={styles.input}
        placeholderTextColor={Colors.placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    width: "80%",
  },
  input: {
    height: 40,
    fontSize: 16,
    color: Colors.text,
  },
});
