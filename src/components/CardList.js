import './CardList.css'
import Card from "./Card";

export default function CardList( {cardImages, count, setCount, bestCount, setBestCount, restart, setRestart} ){
    return (
        <div className="board">
            {cardImages.map(card => {
                return <Card 
                    card={card} 
                    key={card.id} 
                    count={count} 
                    setCount={setCount} 
                    bestCount={bestCount} 
                    setBestCount={setBestCount}
                    restart={restart}
                    setRestart={setRestart}
                />
            })}
        </div>
    );
}