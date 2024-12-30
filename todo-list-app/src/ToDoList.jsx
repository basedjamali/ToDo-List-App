import React, {useState} from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {

  }

  const deleteTask = (index) => {

  }

  const moveTaskUp = (index) => {
    
  }

  const moveTaskDown = (index) => {

  }

  return(
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
          <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
          <button className="add-button" onClick={addTask}>Add</button>
        </div>

        <ol>
          {
            tasks.map((task, index) => 
              <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>👆🏽</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>👇🏽</button>
              </li>
            )
          }
        </ol>
      </div>
    </>
  );
}

export default ToDoList;