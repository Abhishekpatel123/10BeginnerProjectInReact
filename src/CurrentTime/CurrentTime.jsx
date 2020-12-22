import { useState , React } from 'react';
import './CurrentTime.css'

function CurrentTime() {


  let time = new Date().toLocaleTimeString();
  const [ctime , setTime ] = useState(time);

  const timeFun = ()=>{
    time = new Date().toLocaleTimeString();
    setTime(time)
  }


  return (
   <>
   <div className = "outer-div">
   <h1>get current time project 1 </h1>
   <h1>{ctime}</h1>
   <button className = "btn bcolor2" onClick = {timeFun} type = "button">get current time</button>
   </div>
   </>
  );
}

export default CurrentTime;
