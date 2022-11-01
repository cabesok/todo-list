import { createContext, useState } from "react";

export const ListContext = createContext();

export const ListProvider = ({children})  => {

    const [list, setList] = useState([{id: 1,title: 'Supermarket' ,status: false }, {id: 2,title: 'Do homework' ,status: false }]);

    const [newTask, setNewTask] = useState('');
    const [updateData, setupdateData] = useState('');

    return(
        <ListContext.Provider value={{list, setList, newTask, setNewTask, updateData, setupdateData}}>

            {children}
            
        </ListContext.Provider>
    )
}