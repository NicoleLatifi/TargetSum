import React, { Component } from 'react';
import { StyleSheet,  View} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={StyleSheet.container}/>
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