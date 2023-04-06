import React, { useState } from 'react';
import './Card.css';

//Component that represents a card
export default function Card( {card} ){
    const [flip, setFlip] = useState(false)
    return (
        <div 
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
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