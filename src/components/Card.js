import React, { useState, useEffect } from 'react';
import './Card.css';

//Component that represents a card
export default function Card( {card, setCount, count, restart, setRestart, setLastCard, flippedCardsCount, setFlippedCardsCount}){
    const [flip, setFlip] = useState(false)

    useEffect(() => {
        if (restart) {
            setFlip(false);
            setRestart(false);
            card.flipped = false;
            card.matched = false;
        }
      },[restart]);

    useEffect(() => {
        setTimeout(() => {
            setFlip(card.flipped);
        }, 600);
    }, [card.flipped]);

    function handleClick(){
        if(!flip && flippedCardsCount != 2){
            setFlippedCardsCount(flippedCardsCount + 1);
            setFlip(!flip);
            card.flipped = true;
            setLastCard(card)
            setCount(count + 1);
        }
    }

    return (
        <div 
            className={`card ${flip ? 'flip' : ''}`}
            onClick={handleClick}
        >
        <div className="front">
            <img className="image" src="./mario_logo.png" alt='logo'/>
        </div>
        <div className="back">
            <img className="image" src={card.imageSource} alt='logo'/>
        </div>
        </div>
    );
}