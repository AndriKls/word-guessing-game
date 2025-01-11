import React from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import Chip from "./components/Chip"
import {languages} from "./languages.js"

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: Add a header with the game title
 * and description. Startin' out easy 🙂🚶‍➡️
 */

export default function Hangman() {
    return (
      <>
        <Header />
        <Status />
        <section className="chips-section">
            {languages.map((language, index) => (
                <Chip
                    key={index}
                    name={language.name}
                    backgroundColor={language.backgroundColor}
                    color={language.color}
                />
            ))}
        </section>
        <main>
            Game goes here
        </main>
      </>
    )
}
