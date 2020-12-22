import {React , useState} from 'react';




const Forms = ()=>{

    const [data , setData] = useState({
        fname : '',
        skill : '',
        email : '',
        age : ''
    });


    const inputEvent = (e)=>{
        const {name , value } = e.target;
        setData((preValue)=>{
            return{
                ...preValue,
                [name] : value
            }


            // if(name === 'name'){
            //     return{
            //         fname : value,
            //         skill : preValue.skill,
            //         email : preValue.email
            //     }
            // }else if(name === 'skill'){
            //     return{
            //         fname : preValue.fname,
            //         skill : value,
            //         email : preValue.email
            //     }
    
            // }else if(name === 'email'){
            //     return{
            //         fname : preValue.fname,
            //         skill : preValue.skill,
            //         email : value
            //     }
    
            // }
            
        });
        

    }

    const onSubmit = (e)=>{
        e.preventDefault();
        setData({
            fname : '',
            skill : '',
            email : '',
            age : ''
        })
    }
    

    return(
        <div className = "outer-div">
            <h1>Form project 4</h1>
            <h1>Hello {data.fname} and Skill is {data.skill}</h1>
            <p style = {{textAlign : 'center'}}>{data.email} and age is {data.age}</p>
            <form onSubmit = {onSubmit}>
                <input className = "input-box" name = "fname" value = {data.fname}  onChange = {inputEvent}  type = 'text' placeholder = 'Enter Your name' />
                <input className = "input-box" name = "skill" value = {data.skill}  onChange = {inputEvent}  type = 'text' placeholder = 'Enter Your Skill' />
                <input className = "input-box" autoComplete = "off" name = "email"  value = {data.email} onChange = {inputEvent}  type = 'text' placeholder = 'Enter Your Email' />
                <input className = "input-box" autoComplete = "off" name = "age"  value = {data.age} onChange = {inputEvent}  type = 'number' placeholder = 'Enter Your Age' />
                <button type = "submit" className = 'btn bcolor3' >Click Me 👍 </button>
            </form>
            
        </div>
    )
}

export default Forms;
