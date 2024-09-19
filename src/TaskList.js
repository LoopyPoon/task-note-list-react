import React from "react";
import './App.css';

function TaskList({ tasks, toggleTaskComplete, deleteTask }) {
    return (
        <div className="tasks-container">
            {tasks.map((task, index) => (
                <div key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
                    <div className="task-content">
                        <span onClick={() => toggleTaskComplete(index)}>{task.content}</span>
                    </div>
                    <button className="delete-task-btn" onClick={() => deleteTask(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;