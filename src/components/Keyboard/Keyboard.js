import React from 'react';


function Keyboard({results}) {
 
  const rows = [
    "QWERTYUIOP",
    "ASDFGHJKL",
    "ZXCVBNM"
  ];
  
  const dictionary = {};
  Array.from("QWERTYUIOPASDFGHJKLZXCVBNM").forEach(letter => dictionary[letter] = '' )
  
  results.forEach(result => {
    result.checkGuessResult.forEach(cgr => {
      dictionary[cgr.letter] = dictionary[cgr.letter] === "correct" ? "correct" : cgr.status;
    })
  })


  return (
    <div>
      {rows.map(row => 
        <p className='keyboard-row'>
          { Array.from(row).map(letter => (
            <span className={`keyboard-letter ${dictionary[letter] ? dictionary[letter] : null}`}>
              {letter}
            </span>
          )) }
        </p>
      )}
    </div>
  );
}

export default Keyboard;
