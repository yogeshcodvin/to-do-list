import Header from "./components/Header";
import ToDolist from "./components/ToDoList";
import { useState } from "react";
import './App.css';

function App() {

    const [text, setText] = useState("");
    const [task, setTask] = useState([]);

    function handleSetTask(){
        if (text.trim() !=='')
        {
            const newTask = {id: Date.now(), text, marked : false}
            setTask([...task, newTask]);
            setText('');
        }
        
    }
    

    function handleDeleteTask(id){

        setTask(task.filter((ta)=> ta.id!==id));

    };

    function onMarked(id){
        setTask(
            task.map((ta) =>
            ta.id === id ? { ...ta, marked: !ta.marked } : ta
        ))
        }


    function handleSaveTask(id, newtext){

        setTask(task.map((t) =>  t.id===id ? {...t, text: newtext} : t));

    }

    return(
        <div className="app-container">
        <Header/>
        <div className="input-container"></div>
        <input className="input-box" placeholder="Add a new task..." onChange={(e)=> setText(e.target.value)}type = "text" value={text}/>
        <button className="add-button" onClick={handleSetTask}>Add Task</button>
        <div/>

        <ToDolist   tasks={task}   updateTask={handleDeleteTask} onMarked={onMarked} saveEditTask={handleSaveTask}/>
        
        </div>
    )
}

export default App;