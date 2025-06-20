import { Item } from "./skuItem";

export function ListView (props) {

    let itemList = props.cards.map(item => item = <Item />);

    return (
        <ul>
            {itemList}
        </ul>
    )
}