import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function TodoInput(props) {
  const [todoInput, setTodoInput] = useState("");

  function todoInputChangeHandler(text) {
    setTodoInput(text);
  }

  function addTodoHandler() {
    if (todoInput.trim() === "") return;
    props.onAddTodo(todoInput.trim());
    setTodoInput("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Todo"
        onChangeText={todoInputChangeHandler}
        value={todoInput}
      />
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={props.onCancel} color="#21E1E1" />
        <Button title="Add Todo" onPress={addTodoHandler} color="#3B9AE1" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3120E0",
  },
  textInput: {
    backgroundColor: "#3B9AE1",
    color: "white",
    width: "80%",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "45%",
  },
});
