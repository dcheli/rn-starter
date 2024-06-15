import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    height: 170,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    height: 80,
    width: 80,
    borderWidth: 1,
    backgroundColor: "pink",
    borderColor: "red",
  },
  viewTwoStyle: {
    height: 80,
    width: 80,
    borderWidth: 1,
    backgroundColor: "lightgreen",
    borderColor: "green",
    alignSelf: "flex-end",
  },
  viewThreeStyle: {
    height: 80,
    width: 80,
    borderWidth: 1,
    backgroundColor: "lightblue",
    borderColor: "blue",
  },
});
