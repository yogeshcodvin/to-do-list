
import { useState } from "react";
import '../utils/ToDoItem.css'

function ToDoItem({ value, updateTask, onMarked, saveEditTask}){



  const [editText , seteditText] = useState(value.text);
  const[isEditing, setisEditing] = useState(false);


  function updateEditTask(){

    saveEditTask(value.id, editText);

    setisEditing(false);
  }


  return(
    <div className={`todo-item ${value.marked ? "completed" : ""}`}>
    <div className="todo-item-text">
    { isEditing ? <input type="text" value = {editText} onChange={(e)=>seteditText(e.target.value)}/> : <span>{value.text} </span>}
    </div>
    <div className="button-group">
    <button className="edit-button" onClick={()=> setisEditing(true)}>Edit</button>
    <button className="delete-button" onClick={()=>updateTask(value.id)}>Delete</button>
    <button className="mark-button" onClick={()=>onMarked(value.id)}>{value.marked ? <><i className="fas fa-check-circle"></i> Unmark</> : "Mark"}</button>
    { isEditing ? <button className="save-button" onClick={updateEditTask}>SaveTask</button> : null }
    </div>
    </div>

  )
}

export default ToDoItem;