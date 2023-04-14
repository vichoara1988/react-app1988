import { useContext } from 'react';
import { TaskContext } from './context/TaskContext';

function Card({ politico }){  
    const {deletePolitico} = useContext(TaskContext);

    return (
            <div className="bg-gray-800">
                        <img src={politico.image} alt="" />
                        <h3>{politico.name}</h3>
                        <p>{politico.description}</p>
                        <button onClick={()=>deletePolitico(politico.id)} 
                        type="button">Eliminar lacras</button>
            </div>
       
    )
}

export default Card

