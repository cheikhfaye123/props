import React from 'react';

const Task = ({ task, onDelete, onToggleComplete }) => {
    return (
        <div className="task">
            <span
                onClick={() => onToggleComplete(task.id)}
                className="task-text"
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
                {task.text}
            </span>
            <button
                onClick={() => onDelete(task.id)}
                className="delete-button"
            >
                Eliminar
            </button>
        </div>
    );
};

export default Task;