import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Common/Button";

const GameScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.guess}>Opponents Guess</Text>
      <View style={style.optionsContainer}>
        <Text style={style.optionsText}>Higher or Lower</Text>
        <View style={style.buttonContainer}>
          <Button>Higher</Button>
          <Button>Lower</Button>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 50,
  },
  optionsContainer: {
    backgroundColor: "#72063c",
    borderRadius: 10,
    margin: 25,
  },
  optionsText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 700,
    padding: 20,
    color: "yellow",
  },
  guess: {},
});
export default GameScreen;
