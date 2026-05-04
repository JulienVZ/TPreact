import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Card} from './components/Card';
import {Button} from './components/Button';
import { useState } from 'react';
import TaskInput from './components/TaskInput';

function App() {
    const [tasks,
        setTasks] = useState ([]) ;
    const addTask = (text) => {
        // Logique pour ajouter une tache ici
    } ;

  return (
    <div className="App">
        <Header />
            <Card />
            <Button />
        <Footer />
    </div>,

    <div className= "container">
        <h1>Ma Todo List </h1>
        <TaskInput onAddTask={addTask} /> <ul>{/* La liste des taches viendra ici */}</ul>
    </div>
  );
}

export default App;