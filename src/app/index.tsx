import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { imagesPaths } from "../constants/imagesPath";

const Home = () => {
  return (
    <View>
      <Text>Homeeeeeee</Text>
      <View style = {{width: 200 , height: 200}}>
      <Image source={imagesPaths.react_logo} style = {{width: "100%", height: "100%"}} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
