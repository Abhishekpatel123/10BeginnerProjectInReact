import { useState , React } from 'react';
import './Clock.css'

function Clock() {


  let time = new Date().toLocaleTimeString();
  const [ctime , setTime ] = useState(time);

  const timeFun = ()=>{
    time = new Date().toLocaleTimeString();
    setTime(time)
  }

setInterval(timeFun, 1000);
  return (
   <>
    <div className = "outer-div">
        <h1> Clock project 2 </h1>
        <h1>{ctime}</h1>
    </div>
   </>
  );
}

export default Clock;

