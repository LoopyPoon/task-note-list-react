import React from "react";
import './App.css';

/**
 * Компонент для отображения списка задач.
 *
 * @param {Object} props - Пропсы компонента.
 * @param {Array} props.tasks - Список задач.
 * @param {Object} props.tasks[].content - Текст задачи.
 * @param {boolean} props.tasks[].completed - Статус выполнения задачи.
 * @param {function} props.toggleTaskComplete - Функция для переключения статуса выполнения задачи.
 * @param {function} props.deleteTask - Функция для удаления задачи.
 * @returns {JSX.Element} Компонент списка задач.
 */
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