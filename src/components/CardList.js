import { useEffect, useState } from 'react';
import './CardList.css'
import Card from "./Card";

export default function CardList( {cards, count, setCount, bestCount, setBestCount, restart, setRestart} ){
    const [lastCard, setLastCard] = useState();
    const [flippedCardsCount, setFlippedCardsCount] = useState(0);
    var matchCount = 0;

    useEffect(() => {
        console.log(flippedCardsCount);
        if(flippedCardsCount == 2){
            const flippedCards = cards.filter(card => 
                card.flipped === true &&
                card.matched === false
                );
                
                if((flippedCards.length != 0) && (flippedCards.length%2 == 0)){
                verifyMatch(flippedCards)
            }
            setFlippedCardsCount(0);
        }
    }, [flippedCardsCount]);


    function verifyMatch(flippedCards){
        let matchingCards = flippedCards.filter(card => 
            card.imageSource === lastCard.imageSource
            );
        if (matchingCards.length == 2) {
            cards[cards.indexOf(matchingCards[0])].matched = true;
            cards[cards.indexOf(matchingCards[1])].matched = true;
            matchCount++;
        } else {
            cards[cards.indexOf(flippedCards[0])].flipped = false;
            cards[cards.indexOf(flippedCards[1])].flipped = false;
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
                    flippedCardsCount={flippedCardsCount}
                    setFlippedCardsCount={setFlippedCardsCount}
                />
            })}
        </div>
    );
}