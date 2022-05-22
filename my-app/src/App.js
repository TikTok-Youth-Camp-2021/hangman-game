import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Button } from './Components/Button';
import { ToggleButton } from './Components/ToggleButton';


function clickMe(){
  alert('You Clicked Me!')
}

function changeText() {
  alert('You Clicked Me!')
}

function App() {

  const [buttonText, setButtonText] = useState("Music: On");

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
          <ToggleButton>Music: On</ToggleButton>
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
