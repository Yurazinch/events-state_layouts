import { Sku } from "./skuCard";

export function CardsView (props) {
    
    let skuMap = props.cards.map(sku => sku = <Sku />);
      
    return (
        <div>
            {skuMap}
        </div>
    )
}