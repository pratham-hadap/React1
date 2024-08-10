

function Item(props){
    let itemName = props.name;
    return(
        <div>
        <div>{itemName}</div>
        {props.children}
        </div>
        
    )
}

export default Item;