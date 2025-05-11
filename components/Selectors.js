import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  
} from "react-native";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Colors from "../styles/Colors";
import globalStyles from "../styles/GlobalStyles";
import CustomInput from "../components/Input";


//CHOOSE DATE
export function DateInput(props) {
  const { value, onChange, label } = props;
  const [isVisible, setIsVisible] = useState(false);

  const showDatePicker = () => {
    setIsVisible(true);
  };

  const hideDatePicker = () => {
    setIsVisible(false);
  };

  const handleConfirm = (date) => {
    console.warn("Date picked: ", date);
    onChange(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text>{value ? value.toLocaleDateString() : "No date selected"}</Text>
      {label && <Text>{label}</Text>}
      <TouchableOpacity
        onPress={showDatePicker}
        style={{ backgroundColor: "blue", padding: 15, borderRadius: 6 }}
      ></TouchableOpacity>
      {isVisible && (
        <DateTimePickerModal
          isVisible={isVisible}
          mode="date"
          date={value || new Date()}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      )}
    </View>
  );
}

//CHOOSE STARTING TIME
export function TimeInput(props) {
  const { value, onChange, label } = props;
  const [isVisible, setIsVisible] = useState(false);

  const showTimePicker = () => {
    setIsVisible(true);
  };

  const hideTimePicker = () => {
    setIsVisible(false);
  };

  const handleConfirm = (date) => {
    console.warn("Time picked in date format: ", date);
    onChange(date);
    hideTimePicker();
  };
  const defaultTime = new Date();
  defaultTime.setHours(0);
  defaultTime.setMinutes(0);
  defaultTime.setSeconds(0);
  defaultTime.setMilliseconds(0);

  const format = (date) => {
    if (!date) return "00:00";
    const h = date.getHours().toString().padStart(2, "0");
    const m = date.getMinutes().toString().padStart(2, "0");
    console.log(h);
    return `${h}:${m}`;
  };

  return (
    <View style={styles.container}>
      <Text>{value ? value.toLocaleDateString() : "No date selected"}</Text>
      {label && <Text style={{ marginBottom: 6 }}>{label}</Text>}
      <TouchableOpacity
        onPress={showTimePicker}
        style={{
          backgroundColor: "grey",
          padding: 20,
          borderRadius: 6,
          alignItems: "center",
        }}
      >
        <Text>{format(value)}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="time"
        date={value || defaultTime}
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
        is24Hour={true} // optional: forces 24-hour clock
      />
    </View>
  );
}

//CHOOSE DURATION
export function DurationInput(props) {
  const { hours, minutes, onChange, label } = props;

  const handleHoursChange = (newHours) => {
    onChange({
      hours: newHours,
      minutes: minutes,
    });
    console.log('hours chosen' + newHours)
  };

  const handleMinutesChange = (newMinutes) => {
    onChange({
      hours: hours,
      minutes: newMinutes,
    });
    console.log('min chosen' + newMinutes)
  };

  const validateHours = (text) => {
    const numericOnly = text.replace(/\D/g, ''); // removes non-digits
    const num = parseInt(numericOnly, 10); // to integer
    if (isNaN(num)) {
      return '';
    } else {
      return String(Math.min(num, 24)); //max 24
    }
  };

  const validateMinutes = (text) => {
    const numericOnly = text.replace(/\D/g, '');
    const num = parseInt(numericOnly, 10);
    if (isNaN(num)) {
      return '';
    } else {
      return String(Math.min(num, 59)); // max 59
    }
  };


  return (
    <View style={{ marginBottom: 16 }}>
      {label && <Text style={{ marginBottom: 6 }}>{label}</Text>}

      <View style={{ flexDirection: "row", gap: 10 }}>
      <TextInput
          value={hours}
          placeholder="0"
          keyboardType="number-pad"
          validator={validateHours}
          onChangeText={handleHoursChange}
          style={{ width: 60 }}
        />
        <Text>hrs</Text>

        <TextInput
          value={minutes}
          placeholder="0"
          keyboardType="number-pad"
          validator={validateMinutes}
          onChangeText={handleMinutesChange}
          style={{ width: 60 }}
        />
        <Text>min</Text>
      </View>
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
});
