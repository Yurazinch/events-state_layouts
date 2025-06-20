export function Sku(props) {

    const { name, price, color, img } = props;

    return (
        <div className="card">
            <img className="cardImage" src={img} alt={name} />
            <div>
                <h2 className="cardName">{name}</h2>
                <p>{color}</p>
            </div>
            <div>
                <h3 className="cardIPrice">{price}</h3>
            </div>
        </div>
    )
}