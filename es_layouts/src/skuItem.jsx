export function Item(props) {

    const { name, price, color, img } = props;

    return (
    <li className="item">
        <img className="itemImage" src={img} alt={name} />
        <p className="itemText">{name} + " " + {color} + "Price: " + {price}</p>            
    </li>
    )
}