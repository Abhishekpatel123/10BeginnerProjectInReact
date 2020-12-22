import {React , useState} from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const InDeUsingMU = ()=>{
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
            <h1>Increment Decrement Using MU Project 7</h1>
            <div className = 'div bcolor5'>
                <h1>{incD}</h1>
            </div>
            <div className = 'div flex justify-evenly align-center bcolor4'>
            <Tooltip title="Add">
                <Button onClick = {Increment}   variant="contained" color="primary">
                <AddCircleOutlineIcon/>
                </Button>
            </Tooltip>
            
            <Tooltip title="Delete">
                <Button onClick = {Decrement}  variant="contained" color="secondary">
                <RemoveCircleOutlineIcon/>
                </Button>
            </Tooltip>
            

            

            </div>


        </div>
    )
}

export default InDeUsingMU;