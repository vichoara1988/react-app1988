import { createContext,useState,useEffect } from "react";
import { politicos as data } from "../politicos";

export const TaskContext = createContext();

export function TaskContextProvider(props){
  
    const [politicos, setPoliticos] = useState([]);

    function createPolitico(politico){
        setPoliticos([...politicos,politico]);
    }

    function deletePolitico(politicoID){
        setPoliticos(politicos.filter( politico => politico.id !== politicoID ));
    }

    useEffect(
        ()=>{
            setPoliticos(data)
        },[]
    )
    
    return (
        <TaskContext.Provider 
            value={{
                politicos:politicos,
                createPolitico:createPolitico,
                deletePolitico:deletePolitico
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}

