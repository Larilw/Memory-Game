import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import { CARD_IMAGES } from './Data';

function App() {
  const [count, setCount] = useState(0);
  const [bestCount, setBestCount] = useState(0);
  const [restart, setRestart] = useState(false);
  const [matchCount, setMatchCount] = useState(0);
  let numberCards;
  let images;
  
  //Gets the number of cards according to the URL
  const params = new URLSearchParams(window.location.search);
  numberCards = params.get('cards');

  useEffect(() => {
    console.log(matchCount);
    if(matchCount == numberCards){
      console.log("A");
      if(bestCount == 0){
        setBestCount(count);
      }
      if(bestCount > count){
        setBestCount(count);
      }
    }
  }, [matchCount]);
  
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
  const cardDuplicates = images.map((card) => ({
    id: card.id + +numberCards,
    imageSource: card.imageSource,
    flipped: false,
    matched: false
  }));
  
  images = images.concat(cardDuplicates);
  const [cardImages, setCardImages] = useState(images.sort(() => Math.random() - 0.5));
  
  function handleRestart(){
    setCount(0);
    setRestart(true);
    shuffleCardImages();
    setMatchCount(0);
  }

  function shuffleCardImages(){
    setCardImages(images.sort(() => Math.random() - 0.5));
  }

  return (
    <div className='app'>
      <div className='title'>
        <h1>Memory Game</h1>
      </div>
      <div className='subtitle'>
        <h2>Theme</h2>
      </div>
      <div className='game'>
        <CardList 
          cards={cardImages} 
          setCount={setCount} 
          count={count} 
          setBestCount={setBestCount} 
          bestCount={bestCount}
          restart={restart}
          setRestart={setRestart}
          matchCount={matchCount}
          setMatchCount={setMatchCount}
        />
        <div className='stats'>
          <h1>
            Moves:
            {Math.floor(count/2)}
          </h1>
          <h1>
            Best Score:
            {Math.floor(bestCount/2)}
          </h1>
          <button className='restart' onClick={handleRestart}>RESTART</button>
        </div>
      </div>
    </div>
  );
}


export default App;
