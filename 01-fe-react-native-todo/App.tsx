import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
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

  const [todoList, setToDoList] = useState<ITodo[]>([])

  function radomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addTodo = (title: string) => {

    const todo = { id: radomInteger(1, 100000), title: title };
    setToDoList([...todoList, todo])
  }

  const deleteTodo = (id: number) => {
    const newTodo = todoList.filter(todo => todo.id != id)
    setToDoList(newTodo)
  }


  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>

        <InputTodo

          addTodo={addTodo} />
        <ListTodo
          todoList={todoList}
          deleteTodo={deleteTodo}
        />


      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20
  },
});
