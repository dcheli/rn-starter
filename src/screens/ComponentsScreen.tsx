import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>ComponentsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
