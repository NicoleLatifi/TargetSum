import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

import RandomNumber from "./RandomNumber";

const Game = ({ randomNumbers, target }) => {
  const [selectedIndices, setSelectedIndices] = useState([]);

  const isNumberSelected = (numberIndex) => {
    return selectedIndices.indexOf(numberIndex) >= 0;
  };

  const selectNumber = (numberIndex) => {
    setSelectedIndices((prevIndices) => [...prevIndices, numberIndex]);
  };

  const determineGameStatus = () => {
    const sumSelected = selectedIndices.reduce((acc, curr) => {
      return acc + randomNumbers[curr];
    }, 0);
    
    if (sumSelected < target) {
      return 'PLAYING';
    }
    if (sumSelected === target) {
      return 'WON';
    }
    if (sumSelected > target) {
      return 'LOST';
    }
  }

  const gameStatus = determineGameStatus();

  return (
    <View style={styles.container}>
      <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>
        {target}
      </Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((randomNumber, i) => {
          return (
            <RandomNumber
              id={i}
              isDisabled={
                isNumberSelected(i) || gameStatus !== 'PLAYING'
              }
              key={i}
              number={randomNumber}
              selectedIndices={selectedIndices}
              onPress={selectNumber}
            />
          );
        })}
      </View>
      <Text>{gameStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    flex: 1,
    paddingVertical: 100,
  },
  target: {
    fontSize: 40,
    marginHorizontal: 50,
    textAlign: "center",
  },
  randomContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  STATUS_PLAYING: {
    backgroundColor: "#aaa",
  },
  STATUS_WON: {
    backgroundColor: "green",
  },
  STATUS_LOST: {
    backgroundColor: "red",
  },
});

export default Game;

Game.propTypes = {
  randomNumbers: PropTypes.array.isRequired,
  target: PropTypes.number.isRequired,
};
