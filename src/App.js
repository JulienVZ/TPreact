import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Card} from './components/Card';
import {Button} from './components/Button';
import { useState } from 'react';
import TaskInput from './components/TaskInput';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text: text
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <>
            <div className="App">
                <Header />
                <Card />
                <Button />
                <Footer />
            </div>

            <div className="container">
                <h1>Ma Todo List</h1>
                <TaskInput onAddTask={addTask} />

                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} className="task-item">
                            {task.text}
                            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default App;