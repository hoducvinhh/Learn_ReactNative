import { FlatList, StyleSheet, Text } from "react-native";


const styles = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: "pink"
    },
})

interface IProps {
    todoList: ITodo[]
}

const ListTodo = (props: IProps) => {
    const { todoList } = props;
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
                        <Text key={item.id} style={styles.todo}>{item.title}</Text>
                    )
                }}
            />
        </>
    )
}

export default ListTodo;