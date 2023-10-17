// Importing all necessary files and libraries
import "./App.css";
import React from "react";
import Hangman from "./components/Hangman";

// Defining the main App component
function App() {
  return (
    <div className="App">
      {/* Rendering the Hangman component with the maxWrong prop set to 6 */}
      <Hangman maxWrong={6} />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
