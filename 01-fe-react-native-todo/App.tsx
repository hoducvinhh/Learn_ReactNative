import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  //string
  const [name, setname] = useState<String>("hoi dan it");

  //number
  const [age, setAge] = useState<number>(30);

  // null, undefine
  const test = false;

  //object, array
  const [person, setPerson] = useState(
    {
      name: "hoi dan it",
      age: 25
    }
  )

  return (
    <View style={styles.container}>
      <View>

        <Text style={styles.text}>{name}</Text>

        <TextInput autoCapitalize='none'
          style={{
            borderColor: "violet",
            borderWidth: 1,
            padding: 10
          }} />
      </View>
      <Text>Hello word with hoidanit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20
  },
});
