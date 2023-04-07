import React, { useState } from 'react';
import './App.css';
import CardList from './components/CardList';

function App() {
  const [cardImages, setCardImages] = useState(CARD_IMAGES)
  const [count, setCount] = useState(0);
  const [bestCount, setBestCount] = useState(0);
  const [restart, setRestart] = useState(false);

  function handleRestart(){
    setCount(0);
    setRestart(true);
    shuffleCardImages();
  }

  function shuffleCardImages(){
    setCardImages(CARD_IMAGES.sort(() => Math.random() - 0.5));
  }

  return (
    <div className='app'>
      <CardList 
        cardImages={cardImages} 
        setCount={setCount} 
        count={count} 
        setBestCount={setBestCount} 
        bestCount={bestCount}
        restart={restart}
        setRestart={setRestart}
      />
      <div>
        <h1>
          <text>Moves: </text>
          {Math.floor(count/2)}
        </h1>
        <h1>
          <text>Best Score: </text>
          {Math.floor(bestCount/2)}
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
  },
  {
    id: 4,
    imageSource: './daisy.png'
  },
  {
    id: 5,
    imageSource: './flower.png'
  },
  {
    id: 6,
    imageSource: './goomba.png'
  },
  {
    id: 7,
    imageSource: './green_mushroom.png'
  },
  {
    id: 8,
    imageSource: './koopa_troopa.png'
  },
  {
    id: 9,
    imageSource: './luigi.png'
  },
  {
    id: 10,
    imageSource: './mario.png'
  },
  {
    id: 11,
    imageSource: './peach.png'
  },
  {
    id: 12,
    imageSource: './red_mushroom.png'
  },
  {
    id: 13,
    imageSource: './star.png'
  },
  {
    id: 14,
    imageSource: './toad.png'
  },
  {
    id: 15,
    imageSource: './toadette.png'
  },
  {
    id: 16,
    imageSource: './yoshi.png'
  }
]

export default App;
