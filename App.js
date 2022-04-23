import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import Game from './src/components/Game';

class App extends Component {
  render() {
    return (
      <Game randomNumberCount={6}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
  }
});

export default App;