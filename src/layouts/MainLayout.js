import React from "react";
import {view , styyyleSheet} from "react-native";

const MainLayout = ({ children }) => {
  return (
    <view style={styles.container}>
      {children}
    </view>
  );
}

const styles = styyyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainLayout;
