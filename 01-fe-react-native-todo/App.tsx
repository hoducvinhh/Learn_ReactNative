import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import InputTodo from './component/todo/input.todo';
import ListTodo from './component/todo/list.todo';

export default function App() {

  // //number
  // const [age, setAge] = useState<number>(30);

  // // null, undefine
  // const test = false;

  // //object, array
  // const [person, setPerson] = useState(
  //   {
  //     name: "hoi dan it",
  //     age: 25
  //   }
  // )

  const [todoList, setToDoList] = useState<ITodo[]>([
    { id: 1, title: "Learn react native " },
    { id: 2, title: "Learn react native" },
    { id: 3, title: "Learn react native" },
    { id: 4, title: "Learn react native" },
    { id: 5, title: "Learn react native" },
    { id: 6, title: "Learn react native" },
    { id: 6, title: "Learn react native" },
    { id: 6, title: "Learn react native" },
    { id: 6, title: "Learn react native" },
    { id: 6, title: "Learn react native" },
    { id: 6, title: "Learn react native" },
    { id: 6, title: "Learn react native" },
    { id: 6, title: "Learn react native" },
    { id: 6, title: "Learn react native" },
    { id: 6, title: "Learn react native" },
    { id: 6, title: "Learn react native" },

  ])


  return (
    <View style={styles.container}>

      <InputTodo />
      <ListTodo
        todoList={todoList}
      />


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
