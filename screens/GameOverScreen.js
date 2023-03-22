import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NumberContainer from "../components/Common/NumberContainer";
import Button from "../components/Common/Button";
import Color from "../utils/colors";
import Card from "../components/Common/Card";

const GameOverScreen = ({ onRestartButton, totalRound, selectedNumber }) => {
  return (
    <View style={Style.mainContainer}>
      <View style={Style.Container}>
        <NumberContainer>Game Over </NumberContainer>
        <View style={Style.btnContainer}>
          <Button onPress={onRestartButton}>Restart</Button>
        </View>
      </View>
      <Card>
        <Text>Chosen Number was {selectedNumber}</Text>
      </Card>
      <Card>
        <Text>Oppoenet took {totalRound} turns to guess your number </Text>
      </Card>
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
