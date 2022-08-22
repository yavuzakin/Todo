import { StyleSheet, Pressable, View, Text } from "react-native";

export default function TodoItem(props) {
  function deleteTodoHandler() {
    props.onDeleteTodo(props.todo.id);
  }
  return (
    <View style={styles.todoItem}>
      <Pressable onPress={deleteTodoHandler} android_ripple={styles.ripple}>
        <Text style={styles.text}>{props.todo.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "#3B9AE1",
    borderRadius: 4,
    marginBottom: 8,
  },
  text: {
    color: "white",
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  ripple: {
    color: "#21E1E1",
  },
});
