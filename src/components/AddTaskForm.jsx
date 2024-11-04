import React, { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="add-form">
            <div className="form-container">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Nueva tarea..."
                    className="task-input"
                />
                <button type="submit" className="add-button">
                    Añadir
                </button>
            </div>
        </form>
    );
};

export default AddTaskForm;