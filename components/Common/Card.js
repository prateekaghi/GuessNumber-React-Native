import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../../utils/colors";

const Card = ({ children }) => {
  return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.Red500,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
    margin: 5,
  },
});
export default Card;
