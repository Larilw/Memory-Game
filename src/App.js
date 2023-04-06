import React, { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import Board from './components/Board';

function App() {
  const [cardImages, setCardImages] = useState(CARD_IMAGES)
  return (
    <CardList cardImages={cardImages} />
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
