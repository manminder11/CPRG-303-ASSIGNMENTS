import React from "react";
import { useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";


export default function TodoForm({ addTask }) {
  const [taskText, setTaskText] = React.useState("");

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText("");
  };


  useEffect(() => {
    // fetch from tasks.json
    fetch("tasks.json")
      .then((response) => response.json())
      .then((data) => {
        // Set the tasks state to the data
        setTasks(data);
      });
  }, []);

  const handleClick = () => {
    fetch("tasks.json")
      .then((response) => response.json())
      .then((data) => {
        // Set the tasks state to the data
        setTasks(data);
      });
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}

        // display the tasks in the input field
        value={tasks}
        = {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <Button title="Generate Random Task" onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    padding: 5,
    marginRight: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
});
