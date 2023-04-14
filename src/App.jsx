import TaskList from "./TaskList";
import {TaskForm} from "./TaskForm";
import { useState, useEffect } from "react";
function App(){ 

  return (
    <div>
      <TaskForm/>
      <TaskList/>

    </div>
  )
}

export default App;