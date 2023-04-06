import Card from "./Card";

export default function CardList( {cardImages} ){
    return (
        <div className="board">
            {cardImages.map(card => {
                return <Card card={card} key={card.id} />
            })}
        </div>
    );
}