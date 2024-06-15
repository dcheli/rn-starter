import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ImageDetail from "../components/ImageDetail";
import Beach from "../../assets/images/beach.jpg";
import Forest from "../../assets/images/forest.jpg";
import Mountain from "../../assets/images/mountain.jpg";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Hello" imageSource={Beach} score={4} />
      <ImageDetail title="My" imageSource={Forest} score={10} />
      <ImageDetail title="Darling" imageSource={Mountain} score={2} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
