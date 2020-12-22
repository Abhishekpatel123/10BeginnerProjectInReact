import {React , useEffect, useState } from 'react';
import axios from 'axios';


const PockemonApi = ()=>{

    const [num , setNum] = useState(1);
    const [name , setName] = useState();
    const [move , setMove] = useState();


    useEffect(()=>{
      const getData = async ()=>{
          const res = await axios.get(` https://pokeapi.co/api/v2/pokemon/${num}`);
        //   const resJson = res.json();
          console.log(res.data.name);
          setName(res.data.name);
          if(num != ""){
          setMove(res.data.moves.length);
          }
      }   
      getData()
    },[num])  
    return (
        <div className = "div bcolor7">
            <h1>Pockemon API Project 8 </h1>
            <h1> You Choose {num} </h1>
            <h1> My name is {name} </h1>
            <h1> I have  {move} moves </h1>
            <div className = 'div flex justify-center flex-coloum bcolor5'>
                <select style = {{width : '40%' ,margin: '10px auto'}} value = {num} onChange = {(e)=>{
                setNum(e.target.value);
                }}>
                    <option value = '1' >1</option>
                    <option value = '3' >3</option>
                    <option value = '4' >4</option>
                    <option value = '5' >5</option>
                    <option value = '6' >6</option>
                    <option value = '25' >25</option>
                    <option value = '45' >45</option>
                    <option value = '40' >40</option>
                    <option value = '30' >30</option>
                </select>
            
                <input onChange = {e =>{
                    setNum(e.target.value);
                    }} className = "input-box" type = 'search' placeholder = "Search Pockemon id (0  to  ....)" />
            </div>


        </div>
    )
}


export default PockemonApi;