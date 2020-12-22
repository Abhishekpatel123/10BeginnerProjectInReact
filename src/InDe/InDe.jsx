import {React , useState} from 'react';



const InDe = ()=>{
    const [incD , setInc] = useState(0);

    const Increment = ()=>{
        setInc(incD + 1)
    }

    const Decrement = ()=>{
        if(incD >0){
            setInc(incD - 1)
        }
        else{
            alert("Sorry , Zero limit reach");
            setInc(0);

        }
    }

    return(
        <div className = 'outer-div'>
            <h1>Increment Decrement Project 6</h1>
            <div className = 'div bcolor5'>
                <h1>{incD}</h1>
            </div>
            <div className = 'div flex justify-center align-center bcolor4'>
            <button onClick = {Increment} className = "btn bcolor1">Increment</button>
            <button onClick = {Decrement} className = "btn bcolor2">Decrement</button>
            </div>


        </div>
    )
}

export default InDe;