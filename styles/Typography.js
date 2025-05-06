import { StyleSheet } from "react-native";

//add fontFamily, correct fontWeight
const typography = StyleSheet.create({
    h1: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#202020'
    },
    h2: {  
        fontSize: 24,
        fontWeight: 'bold',
        color: '#202020'
      },
      h3: {  
        fontSize: 18,
        fontWeight: 'normal',
        color: '#202020'
      },
      p: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#202020'
      }
});

export default typography;