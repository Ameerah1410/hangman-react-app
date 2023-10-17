import React from "react";

// Defining the Help component
const Help = (props) => {
  // Returning the JSX content for the Help component
  return (
    <div className="help-content">
      {/* Header for the help section */}
      <h2>Hangman Rules</h2>
      {/* Describing the rules for the Hangman game */}
      <p>Try to guess the name of the country by selecting letters.</p>
      <p>You can make up to {props.maxWrong} wrong guesses.</p>
      <p>Click on the letters to make your guesses.</p>
      <p>Good luck!</p>
    </div>
  );
};

// Exporting the Help component as the default export
export default Help;
