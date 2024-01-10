import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter()
{
    const {
        totalTodos, 
        completedTodos,
    }= React.useContext(TodoContext)
    
    return(
        <body>
        <h1>Tareas
        </h1>
        <h2>Has completado {completedTodos} de {totalTodos} tareas
        <div className="line2"></div>
        </h2>
        </body>
    );
}


export { TodoCounter }
