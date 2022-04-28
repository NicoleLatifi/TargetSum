import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const RandomNumber = ({id, isDisabled, number, onPress}) => {
  const handlePress = () => {
    if (isDisabled) { return }
    onPress(id);
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.random, isDisabled && styles.disabled]}>{number}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  random: {
    backgroundColor: "#999",
    fontSize: 40,
    marginHorizontal: 20,
    marginTop: 50,
    textAlign: "center",
    width: 100,
  },
  disabled: {
    opacity: 0.3,
  },
})

export default RandomNumber;

RandomNumber.propTypes = {
  id: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  number: PropTypes.number.isRequired,
  selectedIndices: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
};