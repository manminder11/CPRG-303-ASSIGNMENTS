import React from "react";
import { ScrollView, Pressable, View, Text, StyleSheet } from "react-native";

export default function Todolist() {
  return (
    <ScrollView>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Do laundry</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.task}>
          <Text style={styles.taskText}>Go to gym</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Walk dog</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.task}>
          <Text style={styles.taskText}>Buy groceries</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.task}>
          <Text style={styles.taskText}>Cook dinner</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.task}>
          <Text style={styles.taskText}>Mow lawn</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.task}>
          <Text style={styles.taskText}>Clean house</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.task}>
          <Text style={styles.taskText}>Read book</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    margin: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  completed: {
    backgroundColor: "#d3ffd3",
  },
  taskText: {
    fontSize: 16,
  },
});
