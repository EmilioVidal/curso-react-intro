import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';
import "./App.css"

const defaultTodos = [
    {text: 'Ver video de Vegetta', completed: true},
    {text: 'Ver video de Willy', completed: false},
    {text: 'Trabaja', completed: true},
    {text: 'Dormir', completed: false},
];

function App() {
  return (
    <>
        <div className='app'>
            <TodoCounter 
            completed = {3}
            total = {22}
            />

            <TodoSearch />

            <TodoList>
                {defaultTodos.map(todo => (
                    <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    />))}
            </TodoList>

            <TodoCreateButton />
        </div>
    </>

  );
}

export default App;