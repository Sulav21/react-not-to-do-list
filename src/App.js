import './App.css';
import React, {useState} from "react";
import {Title} from './components/Title.js';
import {Form} from './components/Form.js';
import {TaskList} from './components/TaskList.js';
import { BadList } from './components/BadList';
import { TotalHours } from './components/TotalHours';

function App() {
  const [taskList, setTaskList] = useState([])

  const addNewTask= task=>{
    setTaskList([...taskList,task])

  }


  return (
    <div class="wrapper">
    <div class="container">
        {/* <!--Top Title--> */}
        <Title />
   
        {/* <!--Form Area--> */}
        <Form addNewTask={addNewTask}/>
   
        {/* <!--list area--> */}
        <div class="row">
        <TaskList taskList={taskList}/>
        <BadList />
        </div>
           
        <TotalHours />
        </div>
    </div>
  
  )
}

export default App;
