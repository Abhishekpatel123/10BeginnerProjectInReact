import {React} from 'react';

const List = (probs)=>{

    return (
    <div className = "flex m-20 align-center">
        <li className = "">{probs.text}</li>
        <button className = "btn" onClick = {()=> { probs.onSelect(probs.id) } }>😠</button>
    </div>
    ) 
    
}
export default List;