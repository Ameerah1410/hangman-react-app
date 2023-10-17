// Importing necessary modules and files
import React, { useState } from "react";
import "./Hangman.css";
import { randomWord } from "./Words";

// Importing images for different stages of the hangman game
import step0 from "./images/0.jpg";
import step1 from "./images/1.jpg";
import step2 from "./images/2.jpg";
import step3 from "./images/3.jpg";
import step4 from "./images/4.jpg";
import step5 from "./images/5.jpg";
import step6 from "./images/6.jpg";

// Defining the Hangman component
const Hangman = (props) => {
  // Initializing state variables
  const [mistake, setMistake] = useState(0); // Number of mistakes made
  const [guessed, setGuessed] = useState(new Set()); // Set of guessed letters
  const [answer, setAnswer] = useState(randomWord()); // Randomly generated word to guess
  const [showHelp, setShowHelp] = useState(false); // State to manage help section visibility

  // Event handler for letter guesses
  const handleGuess = (e) => {
    let letter = e.target.value;
    setGuessed((prevGuessed) => new Set(prevGuessed.add(letter)));
    setMistake(
      (prevMistake) => prevMistake + (answer.includes(letter) ? 0 : 1)
    );
  };

  // Function to display the guessed word with underscores for unguessed letters
  const guessedWord = () => {
    return answer
      .split("")
      .map((letter) => (guessed.has(letter) ? letter : " _ "));
  };

  // Array of images for different stages of the hangman
  const images = [step0, step1, step2, step3, step4, step5, step6];

  // Function to generate the alphabet buttons for the user to make guesses
  const generateButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        className="button"
        key={letter}
        value={letter}
        onClick={handleGuess}
        disabled={guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  };

  // Function to reset the game when the 'Reset' button is clicked
  const resetButton = () => {
    setMistake(0);
    setGuessed(new Set());
    setAnswer(randomWord());
  };

  // Function to toggle the visibility of the help section
  const showHelpSection = () => {
    setShowHelp(!showHelp);
  };

  // Checking game status for a win or loss
  const gameOver = mistake >= props.maxWrong;
  let gameStat = generateButtons();
  const isWinner = guessedWord().join("") === answer;

  if (isWinner) {
    gameStat = "You Won!!!";
  }

  if (gameOver) {
    gameStat = "You Lost!!!";
  }

  // Returning the JSX content
  return (
    <div className="Hangman container">
      <div className="help-section">
        {/* Button to show/hide the help section */}
        <button className="help-button" onClick={showHelpSection}>
          Help
        </button>
        {showHelp && (
          <div className="help-content">
            {/* Help section content */}
            <h2>Hangman Rules</h2>
            <p>Try to guess the name of the country by selecting letters.</p>
            <p>You can make up to {props.maxWrong} wrong guesses.</p>
            <p>Click on the letters to make your guesses.</p>
            <p>Good luck!</p>
          </div>
        )}
      </div>
      <h1 className="title">Hangman</h1>
      {/* Displaying the number of wrong guesses made */}
      <div className="wrong-guesses">
        <strong>Wrong Guesses:</strong> {mistake} of {props.maxWrong}
      </div>
      {/* Displaying the hangman images */}
      <div className="images">
        <img src={images[mistake]} alt="" />
      </div>
      <div className="paragraph">
        {/* Displaying the word to be guessed */}
        <p>Guess the Country</p>
        <p>{!gameOver ? guessedWord() : answer}</p>
      </div>
      {/* Displaying the alphabet buttons for guesses */}
      <div className="keypad">
        <p>{gameStat}</p>
      </div>
      {/* Button to reset the game */}
      <button className="reset-button" onClick={resetButton}>
        Reset
      </button>
    </div>
  );
};

// Exporting the Hangman component as the default export
export default Hangman;
