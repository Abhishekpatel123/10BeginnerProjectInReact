import {React , useState} from 'react';
import './Event';




const Event = ()=>{
    const bgChange = ()=>{
        let color = "#";
        let colorValues = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D'];
        for (let i = 1; i <= 6; i++) {
            color = color + colorValues[Math.floor(Math.random()*colorValues.length)];
        }
        const body  = document.querySelector('body');
        const showColor = document.getElementById('showColor');
        showColor.innerHTML = color;
        body.style.backgroundColor = color;
        return color;
    }


    return(
        <div className = "outer-div">
            <h1>background color changer project 3</h1>
            <h1 id = "showColor"></h1>
            <button className = "btn bcolor2" onClick = {bgChange}>Click Me</button>
        </div>
    )
}

export default Event;