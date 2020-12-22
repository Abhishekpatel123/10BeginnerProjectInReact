import React from 'react';
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


const HomePage = ()=>{
    return(
        <>
            <div className = 'grid-div' >
            <h1> 🔥 Some of my 🥇 beginner level 🥇 projects 🔥 </h1>
                <Link to= '/currentTime' className = 'link'>
                    <Button variant="contained" color="primary">CurrentTime</Button>
                </Link>
                <Link to='/clock' className = 'link'>
                    <Button variant="contained" color="primary">Clock</Button>
                </Link>
                <Link to = '/event' className = 'link'>
                    <Button variant="contained" color="primary">Event</Button>
                </Link>
                <Link to = 'form' className = 'link'>
                    <Button variant="contained" color="primary">Form</Button>
                </Link>
                <Link to = 'todoList' className = 'link'>
                    <Button variant="contained" color="primary">Todo List</Button>
                </Link>
                <Link to = 'incrementDecrement' className = 'link'>
                    <Button variant="contained" color="primary">Increment Decrement</Button>
                </Link>
                <Link to = 'incrementDecrementMu' className = 'link'>
                    <Button variant="contained" color="primary">Increment Decrement using MU</Button>
                </Link>
                <Link to = 'pockemonApi' className = 'link'>
                    <Button variant="contained" color="primary">POCKEMON API</Button>
                </Link>           
    
                

            </div>
        </>
    )
}
export default HomePage;