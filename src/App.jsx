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

    const wrongGuessCount = guessedLetters.filter(letter => !letters.includes(letter)).length;

    const isGameLost = wrongGuessCount === languages.length - 1
    const isGameWon = 
        currentWord.split("").every(letter => guessedLetters.includes(letter))
    
    const isGameOver = isGameLost || isGameWon

    let statusBox;

      if (isGameWon) {
        statusBox = <Status text1="You win!" text2="Well done! 🎉" className="status-won" />;
      } else if (isGameLost) {
        statusBox = <Status text1="Game over!" text2="You lose! Better start learning Assembly 😭" className="status-lost" />;
      } else {
        statusBox = <Status text1="Game in progresss!" text2="Keep guessing!" className="status-progress" />;
      }

    


    const letterBoxes = letters.map((letter, index) => {
      const isGuessed = letters.includes(letter) && guessedLetters.includes(letter);
      return (
        <Letterbox id={index} key={index} letter={letter} className={clsx(["letterbox", isGuessed && "guessed"])}/>
      );
    })

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
    

    const languageElements = languages.map((language, index) => {
      const isLanguageLost = index < wrongGuessCount
      const className = clsx("chip", isLanguageLost && "lost")
      const styles = {
        backgroundColor: language.backgroundColor,
        color: language.color
    }
      return (
          <Chip
          className={className}
          key={index}
          name={language.name}
          backgroundColor={language.backgroundColor}
          color={language.color}
          styles={styles}
      />
      )
  })

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
        {statusBox}
        <section className="chips-section">
            {languageElements}
        </section>

        <section className="letterbox-section">
            {letterBoxes}
        </section>
        
        <section className="keyboard-section">
          {keyBoard}
        </section>

       {isGameOver && (<section className="new-game-section">
          <button className="new-game">New Game</button>
        </section>)
        }
      </>
    )
}
