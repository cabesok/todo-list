

import {TextField, Button, Grid} from "@mui/material"

import { useContext } from 'react';
import { ListContext } from '../context/ListContext';

const Form = () => {

    const {list, setList} = useContext(ListContext)
    const {newTask, setNewTask} = useContext(ListContext)
    const {updateData, setupdateData} = useContext(ListContext)

    const addTask = () => {
        if(newTask){
            let num = list.length + 1;
            let newEntry = {id: num, title: newTask, status: false}
            setList([...list, newEntry])
            setNewTask('')
        }
    }

    
    
    return(

        <Grid 
            container
            justifyContent= 'space-around'
            >
            
            <TextField 
                autoFocus={true}
                variant="outlined" 
                label="Enter task..."
                value={newTask}
                onChange= { (e) => setNewTask(e.target.value)}
                 ></TextField>
            <Button variant="contained" onClick={addTask} >Add</Button>
            
        </Grid>
    )
}

export default Form;