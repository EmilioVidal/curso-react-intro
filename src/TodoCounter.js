import './TodoCounter.css';

function TodoCounter({total, completed})
{
    return(
        <body>
        <h1>Tareas</h1>
        <h2>Has completado {completed} de {total} TODOS</h2>
        </body>
    );
}


export { TodoCounter }
