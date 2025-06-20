export function IconSwitch({props}) {

    const {state, onSwitch} = props;
    const view_card = <img src="./img/consumer_icon_266361.webp" name="view card" alt="view card" />
    const view_list = <img src="./img/research_icon_266365.webp" name="view list" alt="view list" />

    return (
        <div className="icon__switsh" onClick={e => onSwitch(e)}>
            { state.isCard === true ? view_card : view_list }
        </div>
    )
}