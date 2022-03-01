
import React, { useState } from "react";

const initialState = {task:"", hr:0}
export const Form = ({addNewTask}) => {

const [newTask, setNewTask] = useState(initialState)

const handleOnChange = (e) =>{
  const {value,name}  = e.target
  setNewTask({
    ...newTask,
    [name]: name==="hr" ? +value : value, 
  })
}

const handleOnSubmit=(e) =>{
  e.preventDefault() 
  addNewTask(newTask)
  setNewTask(initialState)
}

  return (
    <div>
      <div class="row">
        <div class="col">
          <div class="form-box py-5 d-flex justify-content-center">
            <form
              onSubmit={handleOnSubmit} 
              class="row row-cols-md-auto g-3 align-items-center"
            >
              <div class="col-12">
                <label
                  class="visually-hidden"
                  for="inlineFormInputGroupUsername"
                >
                  Your Task
                </label>
                <div class="input-group">
                  <input
                    type="text"
                    name="task"
                    required
                    value={newTask.task}
                    onChange={handleOnChange}
                    class="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Your Task"
                  />
                </div>
              </div>
              <div class="col-12">
                <label
                  class="visually-hidden"
                  for="inlineFormInputGroupUsername"
                >
                  Hours
                </label>
                <div class="input-group">
                  <input
                    type="number"
                    required
                    name="hr"
                    value={newTask.hr}
                    onChange={handleOnChange}
                    class="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Hours"
                  />
                </div>
              </div>

              <div class="col-12">
                <button type="submit"class="btn btn-primary">
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
