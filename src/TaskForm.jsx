import { useState,useContext } from 'react';
import { TaskContext } from './context/TaskContext';



export function TaskForm(){

    const [name,setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

    const {createPolitico} = useContext(TaskContext);

    const Formulario = (e)=>{
        e.preventDefault();
        const newPolitico = {
            id:222,
            name:name,
            description:description,
            image:url
        }
        setName("");
        setDescription("");
        setUrl("");
        createPolitico(newPolitico)
    
    }
    return (
        <div>
            <form className="formulario" onSubmit={Formulario}>
                <input type="text" value={name} placeholder="Escriba el politico"  autoFocus
                onChange={(e)=>{setName(e.target.value);}}/>

                <textarea value={description} placeholder="Escriba la descripcion de esa basofia "
                onChange={(e)=>{setDescription(e.target.value)}}></textarea>

                <input value={url} placeholder="escriba la url de la imagen" type="text"
                onChange={(e)=>{setUrl(e.target.value)}}/>

                <button type="submit">Agregar</button>
            </form>
        </div>
    );
}