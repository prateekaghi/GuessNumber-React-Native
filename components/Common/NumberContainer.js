import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../../utils/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={style.container}>
      <Text style={style.numberText}>{children}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Color.Red500,
    margin: 24,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.Yellow500,
  },
  numberText: {
    color: Color.Red600,
    fontSize: 36,
    fontWeight: "800",
  },
});
export default NumberContainer;
