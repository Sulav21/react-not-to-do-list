import React from "react";

export const TaskList = ({taskList, handleOnDelete,markAsNotToDo}) => {
  console.log(taskList)
  return (
    <div className="col-md-6 mb-3 mr-2">
      <h2>Task List</h2>
      <table className="table table-striped">
        <tbody id="task-list">
        {taskList.map((item,i)=>{
          return(
            <tr key={i}>
<td scope="row"><input type="checkbox" name="" id="" /></td>
<td>{item.task}</td>
<td>{item.hr}hrs</td>
<td className="text-end"><button className="bg-transparent" onClick={()=>handleOnDelete(i)}><i className="fa-solid fa-trash" title="Delete"></i></button>

<button className="btn btn-success" onClick={()=>markAsNotToDo(i)}><i className="fa-solid fa-arrow-right" title="Mark as bad list"></i>
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
