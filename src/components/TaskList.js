import React from "react";

export const TaskList = ({taskList}) => {
  console.log(taskList)
  return (
    <div class="col-md-6 mb-3 mr-2">
      <h2>Task List</h2>
      <table class="table table-striped">
        <tbody id="task-list">
        {taskList.map((item,i)=>{
          return(
            <tr>
<td scope="row"><input type="checkbox" name="" id="" /></td>
<td>{item.task}</td>
<td>{item.hr}hrs</td>
<td class="text-end"><button class="bg-transparent" onclick="deleteItem(${i})"><i class="fa-solid fa-trash" title="Delete"></i></button>

<button class="btn btn-success" onclick="markAsNotToDo(${i})"><i class="fa-solid fa-arrow-right" title="Mark as bad list"></i>
</button>
</td>
</tr>
          )
})}
        
        </tbody>
      </table>
    </div>
  );
};
