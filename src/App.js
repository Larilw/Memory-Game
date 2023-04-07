import React, { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import { CARD_IMAGES } from './Data';

function App() {
  const [count, setCount] = useState(0);
  const [bestCount, setBestCount] = useState(0);
  const [restart, setRestart] = useState(false);
  var numberCards;
  var images;
  
  //Gets the number of cards according to the URL
  const params = new URLSearchParams(window.location.search);
  numberCards = params.get('cards');
  
  if(numberCards > 15){
    alert('Number of cards exceeded limit. The max number of cards is 15, the game will open with default settings');
    numberCards = 6;
    params.set('cards', 6);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }

  if(!numberCards){
    numberCards = 6;
  }

  images = CARD_IMAGES.slice(0, numberCards);
  images = images.concat(images);
  
  const [cardImages, setCardImages] = useState(images.sort(() => Math.random() - 0.5));
  
  function handleRestart(){
    setCount(0);
    setRestart(true);
    shuffleCardImages();
  }

  function shuffleCardImages(){
    setCardImages(images.sort(() => Math.random() - 0.5));
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
          <text> Number of Cards: </text>
          {numberCards}
        </h1>
      </div>
      <div>
        <button onClick={handleRestart}>RESTART</button>
      </div>
    </div>
  );
}


export default App;
