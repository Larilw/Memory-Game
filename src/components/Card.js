import './Card.css';

//Component that represents a card
export default function Card(){
    return <button 
            className="card"
        >
        <img 
            className="image"
            src="./brasao.png"
            alt='brasao'
        />
    </button>;

}