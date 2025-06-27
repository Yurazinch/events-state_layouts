import './App.css';
//import {Store} from './store';
import { useState } from 'react';
import { CardsView } from './cardsview';
import { ListView } from './listview';

function App() {

  const image = {
    card: {
      img: "./img/dashboard_24dp_E3E3E3.png",
      alt: "view card"   
    },
    list: {
      img: "./img/list_24dp_E3E3E3.png",
      alt: "view list"    
    } 
  }

  const cards = [
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, 
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, 
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, 
    {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, 
    {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }
  ];

  const [isCard, setState] = useState(false);

  function handleClick() {
    setState(!isCard);    
  }
  
  return (
    <body>
      <div onClick={ handleClick }>
        { isCard ? 
          ( <img src={image.list.img} alt={image.list.alt} /> ) :
          ( <img src={image.card.img} alt={image.card.alt} /> ) }
      </div>    
      <div className="cards">
        { isCard ? ( <CardsView elem = { cards }/> ) : ( <ListView elem = { cards }/> )}
      </div>
    </body>
  );
}

export default App;
