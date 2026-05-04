import { useState } from 'react';
const TaskInput = ({ onAddTask }) => {
    const [inputValue, setInputValue] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault ();
        if (inputValue.trim()) {
            onAddTask (inputValue); // On fait remonter l'info setInputValue (""); // On vide le champ
        }
    };
    return (
        <form onSubmit ={handleSubmit}>
            <input
                type="text"
                value = {inputValue}
                onChange= {(e) => setInputValue(e.target.value)}
                placeholder="Ajouteruuneutache..."
                />
            <button type="submit">Ajouter </button>
        </form>
    );
};

export default TaskInput;