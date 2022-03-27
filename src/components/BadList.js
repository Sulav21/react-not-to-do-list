import React from "react";

export const BadList = ({badList,markAsTask,handleOnDelete,totalBadHours}) => {
  
  
  return (
    <div className="col-md-6 mb-3">
      <h2>Bad List</h2>
      <table className="table table-striped">
        <tbody id="bad-list">
        {badList.map((item,i)=>{
          return(
            <tr key={i}>
<td scope="row"><input type="checkbox" name="" id="" /></td>
<td>{item.task}</td>
<td>{item.hr}hrs</td>
<td className="text-end"><button className="bg-transparent" onClick={()=>handleOnDelete(i)}>
<i className="fa-solid fa-trash" title="Delete"></i></button>

<button className="btn btn-success" onClick={()=>markAsTask(i)}>
<i className="fa-solid fa-arrow-left"  title="Mark as bad list"></i>
</button>
</td>
</tr>
          )
})}
<div className="ttl-bad text-end text-light">Total time saved = <span id="totalhourssaved">{totalBadHours}</span> hours</div>
        </tbody>
      </table>
    </div>
  );
};
