import React from 'react';
import { range } from '../../utils';

function Guess({checkGuessResult}) {
  return (
    <p className="guess">
      { range(0,5).map(col => (
        <span className={`cell ${checkGuessResult ? checkGuessResult[col].status : null}`} key={col}>
          { checkGuessResult ? checkGuessResult[col].letter : ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
