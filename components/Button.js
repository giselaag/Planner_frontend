import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TextInput, View } from 'react-native';
import Colors from '../styles/Colors';

// MAIN BUTTON
export const MainButton = ({
  title,
  onPress,
  disabled = false,
  style,
  textStyle,
}) => (
  <TouchableOpacity
    style={[styles.mainButton, style, disabled && styles.disabled]}
    activeOpacity={0.7}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

//SECONDARY BUTTON 
export const SecondaryButton = ({
  title,
  onPress,
  disabled = false,
  style,
  textStyle,
}) => (
  <TouchableOpacity
    style={[styles.secondaryButton, style, disabled && styles.disabled]}
    activeOpacity={0.7}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

// You can extend with more components: CustomCard, CustomCheckbox, etc.

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
  },
  secondaryButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.6,
  },
});


