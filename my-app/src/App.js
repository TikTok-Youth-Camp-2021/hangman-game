import './App.css';
import React, { useState, useEffect } from 'react';
import { Button } from './Components/Button';
import { MusicButton } from './Components/MusicButton';
import song from "./static/Makai Symphony - Dragon Castle.mp3";
import PopUp from './Components/PopUp';
import RepeatNotif from './Components/RepeatNotif';
import Stickman from './Components/Stickman';
import Title from './Components/Title';
import Word from './Components/Word';
import Wrong from './Components/Wrong';
import { showNotification as show, checkWin } from './helpers/helpers';

const words = ['abstraction', 'topology', 'serialisation', 'optimisation'];
let chosenWord = words[Math.floor(Math.random() * words.length)];

function ClickMe(){
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (chosenWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    chosenWord = words[random];
  }

  return (
    <>
      <Title />
      <div className="game-container">
        <Stickman wrongLetters={wrongLetters} />
        <Wrong wrongLetters={wrongLetters} />
        <Word chosenWord={chosenWord} correctLetters={correctLetters} />
      </div>
      <PopUp correctLetters={correctLetters} wrongLetters={wrongLetters} chosenWord={chosenWord} setPlayable={setPlayable} playAgain={playAgain} />
      <RepeatNotif showNotification={showNotification} />
    </>
  );
}



function App() {

  const Song = new Audio(song)
  Song.play()

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hangman
        </p>
      </header>
      <div className='Menu'>
        <div className='MenuButton'>
          <a href='https://www.google.com/' target = '_self'>
            <Button onClick={ClickMe}>Resume Game</Button>
          </a>
        </div>

        <div className='MenuButton'>
          <MusicButton audio = {Song}>Music: On</MusicButton>
        </div>

        <div className='MenuButton'>
          <a href='https://www.google.com/' target = '_self'>
            <Button>View Statistics</Button>
          </a>
        </div>

        <div className='MenuButton'>
          <a href='https://www.google.com/' target = '_self'>
            <Button>Return to Home</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
