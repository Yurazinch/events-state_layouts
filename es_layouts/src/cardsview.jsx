export function CardsView ({elem}) {
      
    return (
        <div>
            {elem.map((item, index) => (
            <Card key={index} name={item.name} price={item.price} color={item.color} img={item.img} />
            ))}
        </div>
    )
}

function Card({ name, price, color, img }) {
  return (
    <div>
        <img src={img} alt={name} />
        <div>
            <h2>{name}</h2>
            <p>{color}</p>
        </div>
        <div>
            <h3>{price}</h3>
        </div>
    </div>
  );
}