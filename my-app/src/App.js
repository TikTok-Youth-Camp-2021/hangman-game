import './App.css';
import React from 'react';
import { Button } from './Components/Button';
import { MusicButton } from './Components/MusicButton';
import song from "./static/Makai Symphony - Dragon Castle.mp3";


function clickMe(){
  alert('You Clicked Me!')
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
            <Button onClick={clickMe}>Resume Game</Button>
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
