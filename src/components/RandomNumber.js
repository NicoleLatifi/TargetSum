import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const RandomNumber = ({number}) => {
  const handlePress = () => {
    console.log(number)
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.random}>{number}</Text>
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
})

export default RandomNumber;

RandomNumber.PropTypes = {
  number: PropTypes.number.isRequired,
};