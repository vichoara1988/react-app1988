import { useContext } from 'react';
import { TaskContext } from './context/TaskContext';

import Card from './Card';

function TaskList(){   

    const {politicos} = useContext(TaskContext);

    if(politicos.length===0){
        return (
            <h1>No hay politicos para mentarles la madre</h1>
        )
    }

  
    return (
        <div>
            <h1>Algunos de los hijos de puta</h1>
            <div className="politicos">
                {
                politicos.map(politico =>(
                    <Card key={politico.id} politico={politico}/>                   
                ))}</div>
        </div>
      
    )
}

export default TaskList;