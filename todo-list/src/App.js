
import React from "react";
import Form from './components/Form';
import TaskList from './components/TaskList';
import {Grid} from "@mui/material";
import {useState} from 'react';
import { ListProvider } from './context/ListContext';

function App() {
  
  const [search, setSearch] = useState([])
  
  return (
  <ListProvider>
      <Grid 
      container
      direction= 'column'
      alignItems= 'center'
      maxWidth= 'sm' 
      sx={{margin: 'auto'}}>

        <h1>To Do List</h1>

        <Form />
        <TaskList />

      </Grid>
  </ListProvider>
    
  );
}

export default App;
