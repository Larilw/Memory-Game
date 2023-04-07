import React, { useState } from 'react';
import './Card.css';

//Component that represents a card
export default function Card( {card, setCount, count}){
    const [flip, setFlip] = useState(false)

    function handleClick(){
        setFlip(!flip);
        setCount(count + 1);
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