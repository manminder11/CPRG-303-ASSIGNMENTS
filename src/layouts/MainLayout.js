import React from "react";
<<<<<<< HEAD
import {view , styyyleSheet} from "react-native";

const MainLayout = ({ children }) => {
  return (
    <view style={styles.container}>
      {children}
    </view>
  );
}

const styles = styyyleSheet.create({
=======
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
>>>>>>> d80d46f37230cdabbb3451452ac54c4e368cbf5e
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainLayout;
<<<<<<< HEAD
=======

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
>>>>>>> d80d46f37230cdabbb3451452ac54c4e368cbf5e
