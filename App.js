import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Modal,
  FlatList,
  StatusBar,
} from "react-native";

import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModalHandler() {
    setIsModalVisible(true);
  }

  function hideModalHandler() {
    setIsModalVisible(false);
  }

  function addTodoHandler(todo) {
    setTodos((currentTodos) => [
      { id: Date.now(), text: todo },
      ...currentTodos,
    ]);
    hideModalHandler();
  }

  function deleteTodoHandler(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <StatusBar barStyle={"default"} />
      <View style={styles.container}>
        <Button title="ADD NEW TODO" onPress={showModalHandler} />
        <Modal visible={isModalVisible} animationType="slide">
          <TodoInput onCancel={hideModalHandler} onAddTodo={addTodoHandler} />
        </Modal>

        <FlatList
          style={styles.todoItems}
          data={todos}
          renderItem={(dataItem) => (
            <TodoItem todo={dataItem.item} onDeleteTodo={deleteTodoHandler} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3120E0",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  todoItems: {
    flex: 5,
    marginTop: 20,
    alignSelf: "flex-start",
    width: "100%",
  },
});
