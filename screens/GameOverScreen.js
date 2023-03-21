import React from "react";
import { View, StyleSheet } from "react-native";
import NumberContainer from "../components/Common/NumberContainer";
import Button from "../components/Common/Button";
import Color from "../utils/colors";

const GameOverScreen = ({ onRestartButton }) => {
  return (
    <View style={Style.mainContainer}>
      <View style={Style.Container}>
        <NumberContainer>Game Over </NumberContainer>
        <View style={Style.btnContainer}>
          <Button onPress={onRestartButton}>Restart</Button>
        </View>
      </View>
    </View>
  );
};
const Style = StyleSheet.create({
  mainContainer: { paddingTop: 100 },
  Container: {
    backgroundColor: Color.Yellow500,
    margin: 10,
    padding: 5,
    borderRadius: 8,
  },
  btnContainer: {
    backgroundColor: Color.Red500,
    padding: 5,
    borderRadius: 8,
  },
});

export default GameOverScreen;
