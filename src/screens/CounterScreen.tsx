import { StyleSheet, Button, Text, View } from "react-native";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  const { payload } = action;
  const { counter } = state;
  return { ...state, counter: counter + payload };
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 as number });
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ payload: -1 });
        }}
      />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
