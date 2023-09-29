import React from 'react';

function HappyBanner({numGuesses, reset}) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{numGuesses} guesses</strong>.
      </p>
      <p>
        <button onClick={reset}>Play Again</button>
      </p>
    </div>
  );
}

export default HappyBanner;
