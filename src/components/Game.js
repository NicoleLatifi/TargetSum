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

  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target}</Text>
      <View style={styles.randomContainer}>
        {randomNumbers.map((randomNumber, i) => {
          return (
            <RandomNumber
              id={i}
              isDisabled={isNumberSelected(i)}
              key={i}
              number={randomNumber}
              selectedIndices={selectedIndices}
              onPress={selectNumber}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    flex: 1,
    paddingTop: 100,
  },
  target: {
    backgroundColor: "#aaa",
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
});

export default Game;

Game.propTypes = {
  randomNumbers: PropTypes.array.isRequired,
  target: PropTypes.number.isRequired,
};
