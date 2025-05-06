import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { updateNickname } from '../reducers/user';
import { CustomInput } from "../components/Input";
import { MainButton } from "../components/Button";


export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState('');

  const handleSubmit = () => {
    dispatch(updateNickname(nickname));
    navigation.navigate('TabNavigator');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image style={styles.image} source={require('../assets/home-image.jpg')} />
      <Text style={styles.title}>Welcome to Locapic</Text>

      <TextInput placeholder="Nickname" onChangeText={(value) => setNickname(value)} value={nickname} style={styles.input} />
      <TouchableOpacity onPress={() => handleSubmit()} style={styles.button} activeOpacity={0.8}>
        <Text style={styles.textButton}>Go to map</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
