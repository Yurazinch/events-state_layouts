import { Component } from "react";
import { IconSwitch } from "./iconswitch";
import { CardsView } from "./cardsview";
import { ListView } from "./listview";
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
        this.setState({ isCard: !this.state.isCard });
        
        if (this.state.isCard === true) {
            this.styleCard = "display: flex";
            this.styleList = "display: none";
        } else {
            this.styleList = "display: flex";
            this.styleCard = "display: none";
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