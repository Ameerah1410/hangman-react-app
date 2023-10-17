import React from "react";

// Defining the LetterButton component
const LetterButton = (props) => {
  // Returning the JSX content for the LetterButton component
  return (
    <button
      className="button"
      value={props.letter} // Setting the value of the button to the provided letter
      onClick={props.onClick} // Assigning the provided onClick function to the button's onClick event
      disabled={props.disabled} // Disabling the button based on the provided disabled value
    >
      {props.letter} {/* Displaying the provided letter as the button label */}
    </button>
  );
};

// Exporting the LetterButton component as the default export
export default LetterButton;
