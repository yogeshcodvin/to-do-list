import '../utils/ToDoList.css'
import ToDoItem from "./ToDoItem";

function ToDolist({tasks, updateTask, onMarked, saveEditTask }){


  return(
    <div className="todo-list">
    {
    
    tasks.map((tas)=> ( <ToDoItem key= {tas.id}     value ={tas} updateTask={updateTask}  onMarked={onMarked}  saveEditTask={saveEditTask}/> ))

    }
    </div>
    
  )
}


export default ToDolist;