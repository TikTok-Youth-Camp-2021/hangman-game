import React from 'react'
import './App_nat.css';

const Popup = ({correctLetters, wrongLetters}//depend on how main game made//
) => {
    return (
        <div className='popup-box'>
            <div className='popup'>
                <h1>{result}</h1>
                <p>{rank}</p>
                <a href='https://www.google.com/' target = '_self'>
                <button onClick={menu}>back</button>
                </a>
            </div>
        </div>
    )
}

function menu(){
    alert('go back menu!')//actually i hv no idea what this means
  }

function result(){
    return "wrong moves:" + "//no. of wrongLetters";
  }

function rank(){ //how many tries we giving ah?
    if (result() === 0) {return 'A'}
    else if (result() <= 2) {return 'B'}
    else if (result() <= 4) {return 'C'}
    else if (result() <= 6) {return 'D'}
    else if (result() === 7) {return 'E'}
    else if (result() >= 8) {return 'F'}
    else {return 'no result'}
  }
export default Popup;