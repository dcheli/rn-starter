import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React, { useState } from "react";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
        title="Add a Color"
      />

      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View style={[styles.color, { backgroundColor: item }]}></View>
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;

const styles = StyleSheet.create({
  color: {
    height: 100,
    width: 100,
  },
});
