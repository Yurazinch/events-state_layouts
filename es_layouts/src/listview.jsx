export function ListView ({elem}) {

    const lists =  elem.map((item, index) => (
    <li className='list' key={index}>
        <img  className='list__img' src={item.img} alt={item.name} />
        <p>{item.name}; цвет: {item.color}; Цена: {item.price}</p>            
    </li>));

    return (
        <ul className='lists'>
            {lists}
        </ul>
    )
}