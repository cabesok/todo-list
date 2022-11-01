import {List, ListItem, ListItemText, ListItemIcon} from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { useContext } from 'react';
import { ListContext } from '../context/ListContext';

const TaskList = () => {

    const {list, setList} = useContext(ListContext)
    const {newTask, setNewTask} = useContext(ListContext)
    const {updateData, setupdateData} = useContext(ListContext)

    const deleteTask = (id) => {
        let newTasks = list.filter(task => {
            return task.id !== id
        })
        setList(newTasks)
    }

    const markDone = (id) => {
            let newTask = list.map(task => {
                if(task.id === id ){
                    return ({...task, status: !task.status})
                }
                return task
            })
            setList(newTask)
    }
    
    return(
        <List sx={{width: '80%', margin: '15px',}}>
            {
                list.map((task, i) => {
                    return(
                <ListItem divider key={task.id}>
                    <ListItemText primary={task.title} sx={task.status ? {textDecoration: 'line-through', opacity: 0.3}  : ''}  />
                        
                        <ListItemIcon onClick={() => markDone(task.id)} >
                            <CheckCircleOutlineIcon fontSize="large" color='success'/>
                        </ListItemIcon>
                        
                        <ListItemIcon onClick={() => deleteTask(task.id)} >
                            <DeleteForeverIcon fontSize="large" color='error'/>
                        </ListItemIcon>

                    

                        
                </ListItem>
                    )
                })
            }
            
            
        </List>
    )
}

export default TaskList;