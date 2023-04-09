import { useEffect, useState } from 'react';
import './CardList.css'
import Card from "./Card";

//Component that's a list of all the cards
export default function CardList( {cards, count, setCount, restart, setRestart, matchCount, setMatchCount} ){
    const [lastCard, setLastCard] = useState();
    const [flippedCardsCount, setFlippedCardsCount] = useState(0);

    //Checks the list of flipped cards to verify match
    useEffect(() => {
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

    /* Compares the card images to verify match, sets matched parameter if they match or handles the parameters to 
    flip the cards if they don't */
    function verifyMatch(flippedCards){
        let matchingCards = flippedCards.filter(card => 
            card.imageSource === lastCard.imageSource
            );
        if (matchingCards.length == 2) {
            cards[cards.indexOf(matchingCards[0])].matched = true;
            cards[cards.indexOf(matchingCards[1])].matched = true;
            setMatchCount(matchCount + 1);
        } else {
            cards[cards.indexOf(flippedCards[0])].flipped = false;
            cards[cards.indexOf(flippedCards[1])].flipped = false;
        }
    }

    return (
        <div className="board">
            {cards.map(card => {
                return <Card 
                    card={card} 
                    key={card.id} 
                    count={count} 
                    setCount={setCount} 
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