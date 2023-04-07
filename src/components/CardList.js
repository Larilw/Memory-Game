import Card from "./Card";

export default function CardList( {cardImages, count, setCount, restart} ){
    return (
        <div className="board">
            {cardImages.map(card => {
                return <Card card={card} key={card.id} count={count} setCount={setCount}/>
            })}
        </div>
    );
}