import './App.css';
import React, {useState} from "react";
import {Title} from './components/Title.js';
import {Form} from './components/Form.js';
import {TaskList} from './components/TaskList.js';
import { BadList } from './components/BadList';
import { TotalHours } from './components/TotalHours';

function App() {
  const [taskList, setTaskList] = useState([])
  const [badList,setBadList]=useState([])
  
  const addNewTask= task=>{
    setTaskList([...taskList,task])
  }

  // Delete taskitem from task list

  const handleOnDelete=i=>{
       
       
       if(window.confirm("Are you sure you want to delete it ?")){
       const newArg=taskList.filter((item,index)=> index !==i)
       setTaskList(newArg)
       }
  }

  const handleOnDelete1=i=>{
       
       
    if(window.confirm("Are you sure you want to delete it ?")){
    const newArg=badList.filter((item,index)=> index !==i)
    setBadList(newArg)
    }
}

  const markAsNotToDo = i =>{
       const selectedItem = taskList[i]
       setBadList([...badList,selectedItem])
       const newArg = taskList.filter((item,index)=>index !==i)
       setTaskList(newArg)
  }

  const markAsTask = i =>{
    const selectedItem = badList[i]
    setTaskList([...taskList,selectedItem])
    const newArg = badList.filter((item,index)=>index !==i)
    setBadList(newArg)
}
const ttlBadHours = badList.reduce((acc,curr)=>acc+curr.hr,0)
const ttlHours1 = taskList.reduce((subttl,item)=>subttl+item.hr,0)
const ttlHours = ttlBadHours + ttlHours1


  return (
    <div className="wrapper">
    <div className="container">
        {/* <!--Top Title--> */}
        <Title />
   
        {/* <!--Form Area--> */}
        <Form addNewTask={addNewTask} ttlHours={ttlHours}/>
   
        {/* <!--list area--> */}
        <div className="row">
        <TaskList taskList={taskList}handleOnDelete={handleOnDelete} markAsNotToDo={markAsNotToDo}/>
        <BadList badList={badList} markAsTask={markAsTask} handleOnDelete={handleOnDelete1} totalBadHours={ttlBadHours} />
        </div>
           
        <TotalHours totalhours={ttlHours}/>
        </div>
    </div>
  
  )
}

export default App;
