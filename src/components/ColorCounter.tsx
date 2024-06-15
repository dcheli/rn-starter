import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ColorCounter = ({ color, onIncrease, onDescrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase  ${color}`} />
      <Button onPress={() => onDescrease()} title={`Decrease ${color}`} />
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({});
