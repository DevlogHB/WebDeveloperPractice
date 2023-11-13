function ShoppingListItme({item, quantity, completd}){
    const styles = {color: completd ? "gray":"red", textDecoration: completd ? "line-through":"none"}
    return <li style={styles}>{item} - {quantity}</li>
}

export default ShoppingListItme;

// {items.map(i=><li key={i.id} style={{color:i.completed ? "gray":"red", textDecoration: i.completed ? "line-through":"none"}}>{i.item} - {i.quantity}</li>)}