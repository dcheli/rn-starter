import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const ListScreen = () => {
  const friends = [
    { name: "Tom1", age: 20 },
    { name: "Dick2", age: 24 },
    { name: "Harry3", age: 21 },
    { name: "Sam4", age: 13 },
    { name: "Bill5", age: 2 },
    { name: "Mike6", age: 55 },
    { name: "Mary7", age: 31 },
    { name: "Jeff8", age: 30 },
    { name: "Lou9", age: 24 },
    { name: "Buddy10", age: 54 },
  ];
  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => {
        return friend.name;
      }}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
