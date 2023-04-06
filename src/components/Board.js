import Card from "./Card";

//Component that defines the board
export default function Board() {
    return (
    <>
        <div className="rowBoard">
            <Card />
            <Card />
            <Card />
        </div>
        <div className="rowBoard">
            <Card />
            <Card />
            <Card />
        </div>
        <div className="rowBoard">
            <Card />
            <Card />
            <Card />
        </div>
    </>
    );
}