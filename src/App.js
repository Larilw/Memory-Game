import React, { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import Board from './components/Board';

function App() {
  const [cardImages, setCardImages] = useState(CARD_IMAGES)
  const [count, setCount] = useState(0);

  function handleRestart(){
    setCount(0);
  }

  return (
    <div>
      <CardList cardImages={cardImages} setCount={setCount} count={count}/>
      <div>
        <h1>
          <text>Moves: </text>
          {Math.floor(count/2)}
          </h1>
      </div>
      <div>
        <button onClick={handleRestart}>RESTART</button>
      </div>
    </div>
  );
}

const CARD_IMAGES = [
  {
    id: 1,
    imageSource: './mario.png'
  },
  {
    id: 2,
    imageSource: './bowser.png'
  },
  {
    id: 3,
    imageSource: './box.png'
  }
]

export default App;
