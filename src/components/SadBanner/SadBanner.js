import React from 'react';

function SadBanner({answer, reset}) {
  return (
    <div class="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      <p>
        <button onClick={reset}>Play Again</button>
      </p>
    </div>
  );
}

export default SadBanner;
