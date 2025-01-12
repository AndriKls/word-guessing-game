import React from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import Chip from "./components/Chip"
import Letterbox from "./components/Letterbox"
import {languages} from "./languages.js"
import Key from "./components/Key.jsx"
import clsx from "clsx";



export default function Hangman() {
    const [guessedLetters, setGuessedLetters] = React.useState([])
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const [currentWord, setCurrentWord] = React.useState("REACT")
    const letters = currentWord.split("")

    


    const letterBoxes = letters.map((letter, index) => (
      <Letterbox id={index} key={index} letter={letter} />
    ))

    const keyBoard = alphabet.map((letter, index) => {
      const isRed = guessedLetters.includes(letter) && !letters.includes(letter);
      const isGreen = letters.includes(letter) && guessedLetters.includes(letter);
    
      return (
        <Key
          key={index}
          letter={letter}
          onClick={guessLetter}
          className={clsx(["key", isGreen && "green", isRed && "red"])}
        />
      );
    });
    

    const languageElements = (
      languages.map((language, index) => (
        <Chip
            key={index}
            name={language.name}
            backgroundColor={language.backgroundColor}
            color={language.color}
        />
    ))
    )

    function guessLetter(event) {
      const letter = event.target.innerText;
      setGuessedLetters(prevLetters => 
        prevLetters.includes(letter) ? 
            prevLetters : 
            [...prevLetters, letter]
    )
      console.log(guessedLetters)
    }
    return (
      <>
        <Header />
        <Status />
        <section className="chips-section">
            {languageElements}
        </section>

        <section className="letterbox-section">
            {letterBoxes}
        </section>
        
        <section className="keyboard-section">
          {keyBoard}
        </section>

        <section className="new-game-section">
          <button className="new-game">New Game</button>
        </section>
      </>
    )
}
