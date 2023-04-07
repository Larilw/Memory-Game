import React, { useState, useEffect } from 'react';
import './Card.css';

//Component that represents a card
export default function Card( {card, setCount, count, bestCount, setBestCount, restart, setRestart}){
    const [flip, setFlip] = useState(false)

    useEffect(function persistForm() {
        if (restart) {
            setFlip(false);
            setRestart(false);
        }
      });

    function handleClick(){
        setFlip(!flip);
        setCount(count + 1);
        if(count > bestCount) setBestCount(count);
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