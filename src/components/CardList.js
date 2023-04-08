import { useState } from 'react';
import './CardList.css'
import Card from "./Card";

export default function CardList( {cards, count, setCount, bestCount, setBestCount, restart, setRestart} ){
    const [lastCard, setLastCard] = useState();
    var matchCount = 0;
    const flippedCards = cards.filter(card => 
        card.flipped === true &&
        card.matched === false
        );
        
    if((flippedCards.length != 0) && (flippedCards.length%2 == 0)){
        verifyMatch()
        console.log(flippedCards)
    }

    function verifyMatch(){
        var matchingCards = flippedCards.filter(card => 
            card.imageSource === lastCard.imageSource
            );
        if (matchingCards.length == 2) {
            cards[cards.indexOf(matchingCards[0])].matched = true;
            cards[cards.indexOf(matchingCards[1])].matched = true;
            matchCount++;
        } else {
            setTimeout(() => {
                cards[cards.indexOf(flippedCards[0])].flipped = false;
                cards[cards.indexOf(flippedCards[1])].flipped = false;
            }, 200);
        }
    }

    return (
        <div className="board">
            {cards.map(card => {
                //console.log(card)
                return <Card 
                    card={card} 
                    key={card.id} 
                    count={count} 
                    setCount={setCount} 
                    bestCount={bestCount} 
                    setBestCount={setBestCount}
                    restart={restart}
                    setRestart={setRestart}
                    setLastCard={setLastCard}
                    matched={card.matched}
                    flipped={card.flipped}
                />
            })}
        </div>
    );
}