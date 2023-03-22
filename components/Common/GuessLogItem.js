import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "./Card";
import Color from "../../utils/colors";

const GuessLogItem = ({ guess, round }) => {
  return (
    <Card>
      <Text style={style.text}>
        Round <Text style={style.highlight}>{round}</Text>
      </Text>
      <Text style={style.text}>
        Guess <Text style={style.highlight}>{guess}</Text>
      </Text>
    </Card>
  );
};
const style = StyleSheet.create({
  text: {
    color: Color.Yellow500,
    fontSize: 20,
    fontWeight: 400,
  },
  highlight: {
    fontWeight: 700,
  },
});
export default GuessLogItem;
