import React from "react";
import { StyleSheet, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";

function Aboutscreen() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div>
        <View style={styles.container}>
        <h1>About Screen</h1>
        <button 
          onClick={() => {
            // Navigate to the home screen
            navigate("home");
          }}
        >
          Go to Home
        </button>
        </View>
      </div>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Aboutscreen;