import ShoppingListItme from './ShoppingListItme';
function ShoppingList({items}){
    return(
        <ul>
            {items.map( i=>
                <ShoppingListItme 
                    key ={i.key}
                    item ={i.item} 
                    quantity={i.quantity} 
                    completd={i.completed}
                />)}
        </ul>
    )
}

export default ShoppingList;


// const data = [
//     {item:"eggs", quantity:12, completed:false},
//     {item:"milk", quantity:1, completed:true},
//     {item:"chicken breasts", quantity:4, completed:false},
//     {item:"carrots", quantity:6, completed:true},
//   ]