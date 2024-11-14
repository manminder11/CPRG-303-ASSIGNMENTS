import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigate } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
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

export default MainLayout;

function Homescreen() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div>
        <h1>Welcome to the Homescreen!</h1>
        <button 
          onClick={() => {
            // Navigate to the about screen
            navigate("about");
          }}
        >
          Go to About
        </button>
      </div>
    </MainLayout>
  );
}

export { Homescreen };
