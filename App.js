import React from 'react';
import Game from './src/components/Game';

const App = () => {
  const randomNumbers = Array
    .from({ length: 6 })
    .map(() => 1 + Math.floor(10 * Math.random()));

  const target = randomNumbers
    .slice(0, 6 - 2)
    .reduce((acc, curr) => acc + curr, 0);
  // TODO: shuffle the random numbers

  return (
    <Game randomNumbers={randomNumbers} target={target} />
  );
}

export default App;