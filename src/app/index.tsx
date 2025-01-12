import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { imagesPaths } from "../constants/imagesPath";

const Home = () => {
  return (
    <View>
      <Text>Homeeeeeee</Text>
      <Image source={imagesPaths.react_logo} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
