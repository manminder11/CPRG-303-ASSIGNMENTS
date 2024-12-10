import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function TodoForm({ addTask }) {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from tasks.json
    fetch("tasks.json")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText("");
  };

  const handleGenerateRandomTask = () => {
    if (tasks.length > 0) {
      const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
      setTaskText(randomTask.task);
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <Button title="Generate Random Task" onPress={handleGenerateRandomTask} />
    </View>
  );
}

TodoForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

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
