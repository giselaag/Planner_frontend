import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CustomInput } from "../components/Input";
import { MainButton } from "../components/Button";
import { Button } from "react-native";
import globalStyles from "../styles/GlobalStyles";
import { DateInput, TimeInput, DurationInput } from "../components/Selectors";

export default function FilterScreen({ navigation }) {
  //const [date, setDate] = useState(new Date(1598051730000));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [duration, setDuration] = useState({ hours: '', minutes: '' });


  return (
    <KeyboardAvoidingView
      style={globalStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* <Image style={styles.image} source={require('../assets/home-image.jpg')} /> */}
      <Text>Add date</Text>
      <Text>Starting date and time:</Text>
      <DateInput
        label="Pick a date"
        value={selectedDate}
        onChange={setSelectedDate}
        />
      <TimeInput
        label="Pick a starting time"
        value={selectedTime}
        onChange={setSelectedTime}
        />
      <DurationInput
        label="How much time do you want your plan to last?"
        hours={duration.hours}
        minutes={duration.minutes}
        onChange={setDuration}
      />
      <Button title="Continue">Continue</Button>
      <MainButton title="Surprise me">
        Surprise me (and show plan immediately)
      </MainButton>
      <Text>Location with google address</Text>
      <Text>transport preference maybe with icons?</Text>
      <Text>Vibe = input with max 100 characters</Text>
      <Text>Budget $ - $$ - $$$ three buttons</Text>
      <Text>Type of plan = categories - dropdown</Text>
      <Text>My interests</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
