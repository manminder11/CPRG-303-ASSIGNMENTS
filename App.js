import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import TodoForm from "./todoform";
import Todolist from "./todolist";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TodoForm />
        <Todolist />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
