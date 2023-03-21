import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Button from "../components/Common/Button";
import Title from "../components/Common/Title";
import Color from "../utils/colors";
import { useState, useEffect } from "react";
import NumberContainer from "../components/Common/NumberContainer";

let minBoundry = 1;
let maxBoundry = 100;
const generateRandomNumber = (min, max) => {
  const rndm = Math.floor(Math.random() * (max - min) + min);
  return rndm;
};

const GameScreen = ({ userSelectedNumber, onGameOver }) => {
  const initialNumber = generateRandomNumber(minBoundry, maxBoundry);
  const [randomNumber, setrandomNumber] = useState(initialNumber);

  useEffect(() => {
    if (randomNumber === userSelectedNumber) {
      onGameOver();
      (minBoundry = 1), (maxBoundry = 100);
    }
  }, [randomNumber]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && randomNumber < userSelectedNumber) ||
      (direction === "higher" && randomNumber > userSelectedNumber)
    ) {
      Alert.alert(
        "Wrong Direction Provided",
        "Press Lower if current guess is higher than your selected number or press Higher if current guess is lower than your selected number.",
        [{ text: "Got It", style: "destructive" }]
      );
      return;
    }
    if (direction === "lower") {
      maxBoundry = randomNumber - 1;
    } else {
      console.log("higher");
      minBoundry = randomNumber + 1;
    }
    const newRandomNumber = generateRandomNumber(minBoundry, maxBoundry);
    setrandomNumber(newRandomNumber);
  };
  return (
    <View style={style.container}>
      <Title title={"Opponents Guess"} />
      <NumberContainer>
        {userSelectedNumber === randomNumber ? "game over" : randomNumber}
      </NumberContainer>
      <View style={style.optionsContainer}>
        <Text style={style.optionsText}>Higher or Lower</Text>
        <View style={style.buttonContainer}>
          <Button onPress={nextGuessHandler.bind(this, "higher")}>
            Higher
          </Button>
          <Button onPress={nextGuessHandler.bind(this, "lower")}>Lower</Button>
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
    backgroundColor: Color.Red500,
    borderRadius: 10,
    margin: 25,
  },
  optionsText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 700,
    padding: 20,
    color: Color.Yellow500,
  },
});
export default GameScreen;
