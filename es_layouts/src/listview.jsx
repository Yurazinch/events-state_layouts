export function ListView ({elem}) {

    const lists =  elem.map((item, index) => (
    <li key={index}>
        <img src={item.img} alt={item.name} />
        <p>{item.name} {item.color} Price: {item.price}</p>            
    </li>));

    return (
        <ul>
            {lists}
        </ul>
    )
}