import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native"



const style = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    }
})


const [name, setName] = useState<String>("");

const InputTodo = () => {
    return (
        <>

            <View>


                <TextInput
                    onChangeText={value => setName(value)}
                    value="name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={style.todoInput} />

                <Button
                    title="Add new"
                    onPress={() => alert("tap me")}
                />

            </View>
        </>
    )

}

export default InputTodo;