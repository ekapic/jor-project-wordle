import React from 'react';
import { range } from '../../utils';
import  { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';

function GuessResults({results}) {

  return (
    <div className="guess-results">
      { range(0, NUM_OF_GUESSES_ALLOWED).map(row => (
         <Guess key={row} checkGuessResult={results.length > row ? results[row].checkGuessResult : undefined} />
      ))}
    </div>
  );
}

export default GuessResults;
