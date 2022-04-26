
import React, { useState } from "react";

const initialState = {task:"", hr:0}
export const Form = ({addNewTask,ttlHours}) => {

const [newTask, setNewTask] = useState(initialState)
const weeklyhr = 168
const handleOnChange = (e) =>{
  
  const {value,name}  = e.target
  // console.log(e.target.value)
  setNewTask({
    ...newTask,
    [name]: name==="hr" ? +value : value, 
  })
}

const handleOnSubmit=(e) =>{
  e.preventDefault() 
if (newTask.hr<1){
  return alert("Please Enter a positive number hours")
}
if(ttlHours+newTask.hr>weeklyhr){
  return alert("You have exceeded weekly hours")
}

  addNewTask(newTask)
  setNewTask(initialState)
}

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="form-box py-5 d-flex justify-content-center">
            <form
              onSubmit={handleOnSubmit} 
              className="row row-cols-md-auto g-3 align-items-center"
            >
              <div className="col-12">
                <label
                  className="visually-hidden"
                  
                >
                  Your Task
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="task"
                    required
                    value={newTask.task}
                    onChange={handleOnChange}
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Your Task"
                  />
                </div>
              </div>
              <div className="col-12">
                <label
                  className="visually-hidden"
                  
                >
                  Hours
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    required
                    name="hr"
                    value={newTask.hr}
                    onChange={handleOnChange}
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Hours"
                  />
                </div>
              </div>

              <div className="col-12">
                <button type="submit"className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
