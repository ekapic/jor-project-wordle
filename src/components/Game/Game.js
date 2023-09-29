import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import HappyBanner from '../HappyBanner/HappyBanner';
import SadBanner from '../SadBanner/SadBanner';
import GuessResults from '../GuessResults/GuessResults';
import  { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';

function Game() {
  // Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info({ answer });
  const [results, setResults] = React.useState([]);
  const [hasWon, setHasWon] = React.useState(false);
  const [hasEnded, setHasEnded] = React.useState(false);

  function checkForEnd() {
    if(!hasWon && !hasEnded && results.length === NUM_OF_GUESSES_ALLOWED) {
      setHasEnded(true);
    }
  }

  function checkForWin() {
    const guess = results.length > 0 ? results[results.length-1].guess : undefined;
    if(!hasWon && guess === answer) {
      setHasWon(true);
    }
  }

  function reset() {
    setResults([]);
    setAnswer(sample(WORDS));
    setHasEnded(false);
    setHasWon(false);
  }

  function addNewGuess(guess) {
    const newGuess = {
      guess, 
      id: crypto.randomUUID(),
      checkGuessResult: checkGuess(guess, answer)
    };
    const newResults = [...results, newGuess];
    setResults(newResults);
  }

  checkForEnd();
  checkForWin();

  return (
  <>
  { hasWon && <HappyBanner numGuesses={results.length} reset={reset} />}
  { !hasWon && hasEnded && <SadBanner answer={answer} reset={reset} />}
  <GuessResults results={results} answer={answer} />
  <GuessInput addNewGuess={addNewGuess} />
  <Keyboard results={results}/>
  </>
  );
}

export default Game;
