import { Button, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';

export default function ProfileScreen({ navigation }) {
 return (
   <View style={globalStyles.container}>
     <Text>Your plan for the day!</Text>
     <Text>general description the detailed description</Text>
     <Text>small clickable map to see route</Text>

 
   </View>
 );
}