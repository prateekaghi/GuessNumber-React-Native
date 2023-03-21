import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../../utils/colors";

const Title = ({ title }) => {
  return (
    <View>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default Title;

const style = StyleSheet.create({
  title: {
    textAlign: "center",
    margin: 10,
    fontSize: 30,
    fontWeight: 700,
    color: Color.Red600,
    borderWidth: 2,
    borderColor: Color.Red600,
    padding: 10,
  },
});
