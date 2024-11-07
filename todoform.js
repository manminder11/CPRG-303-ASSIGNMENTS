import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function TodoForm() {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Add a new task..." />
      <Button title="Add" />
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
