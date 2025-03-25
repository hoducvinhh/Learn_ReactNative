import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native"

import MineButton from "../button/mine.button";


const style = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    }
})


interface IProps {
    addTodo: (v: string) => void;

}

const InputTodo = (props: IProps) => {

    const { addTodo } = props;

    const [name, setName] = useState<string>("");
    const handleAddNewTodo = () => {
        if (!name) {
            Alert.alert("thong tin khong hop le",
                "Tieu de khong duoc de trong",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel preed"),
                        style: "cancel",
                    },

                    { text: "Ok", onPress: () => console.log("on pressed") },
                ]

            );
            return;
        }

        addTodo(name);
        setName("");
    }


    return (
        <>
            <View style={{ marginBottom: 20 }}>
                <TextInput
                    onChangeText={value => setName(value)}
                    value={name}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={style.todoInput} />

                <MineButton

                    title="add new"
                    onPress={handleAddNewTodo}
                />

            </View>

        </>
    )

}

export default InputTodo;