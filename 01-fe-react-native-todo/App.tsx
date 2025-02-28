import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>

        <Text style={styles.text}>Test</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
