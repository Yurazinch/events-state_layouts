import { Component } from "react";
export class Store extends Component {
    constructor (props) {
        super (props);        
        this.state = { isCard: false };
        this.onSwitch = this.onSwitch.bind(this);
        this.styleCard = '';
        this.styleList = '';
        this.cards = [
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
    }

    onSwitch() {
        this.setState( prevState => ({ isCard: !prevState.isCard }));
        
        if (this.state.isCard === true) {
            this.styleCard = 'display: flex';
            this.styleList = 'display: none';
        } else {
            this.styleList = 'display: flex';
            this.styleCard = 'display: none';
        }
    }

    render () {
        return (
            <body>
                <IconSwitch /> 
                <div className="cardView" style={this.styleCard}>
                    <CardsView />
                </div>
                <div className="listView" style={this.styleList}>
                    <ListView />
                </div>
            </body>
    )}
};

function IconSwitch(isCard) {
    
    const view_card = <img src="./img/consumer_icon_266361.webp" name="view card" alt="view card" />
    const view_list = <img src="./img/research_icon_266365.webp" name="view list" alt="view list" />

    return (
        <div className="icon__switsh" onClick={event => this.onSwitch(event)}>
            { isCard ? view_card : view_list }
        </div>
    )
}

function CardsView (props) {
    const { name, price, color, img } = props.cards;

    return (
        props.cards.map(card => card = <div className="card">
            <img className="cardImage" src={img} alt={name} />
            <div>
                <span className="cardName">{name + " " + color}</span>
            </div>
            <div>
                <span className="cardIPrice">{price}</span>
            </div>
        </div>)
    )
}

function ListView (props) {
    const { name, price, color, img } = props.cards;
    return (
        props.cards.map(item => item = <div className="item">
            <img className="itemImage" src={img} alt={name} />
            <div>
                <span className="itemName">{name + " " + color}</span>
            </div>
            <div>
                <span className="itemIPrice">{price}</span>
            </div>
        </div>)
    )
}