import React from 'react';

function GuessInput({addNewGuess}) {
  const [guess, setGuess] = React.useState('');

  return (
  <form className="guess-input-wrapper" onSubmit={(event) => {
    event.preventDefault();
    if(guess.length !== 5) {
      return false;
    }
    console.log({guess});
    addNewGuess(guess);
    setGuess('');
  }}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" 
      type="text"
      value={guess} 
      onChange={(event) => {
        if(event.target.value.length > 5) {
          return;
        }
        setGuess(event.target.value.toUpperCase());
      }}
      pattern='[A-Z]{0,5}'
    />
  </form>
  );
}

export default GuessInput;
