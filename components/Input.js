import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Colors from "../styles/Colors";

// INPUT
export const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  style,
  inputStyle,
  containerStyle,
}) => (
  <View style={[styles.inputContainer, containerStyle]}>
    <TextInput
      style={[styles.input, inputStyle]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={Colors.placeholder}
    />
  </View>
);

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
