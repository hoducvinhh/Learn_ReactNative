import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";


const styles = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: "pink"
    },
})

interface IProps {
    todoList: ITodo[]
    deleteTodo: (v: number) => void;
}

const ListTodo = (props: IProps) => {
    const { todoList, deleteTodo } = props;
    // console.log(todoList);
    return (
        <>
            <FlatList

                style={{
                    marginTop: 20,
                    borderColor: "red",
                    borderWidth: 1

                }}

                data={todoList}
                keyExtractor={item => item.id + ""}

                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                            <Text key={item.id}
                                style={styles.todo}

                            >{item.title}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

export default ListTodo;