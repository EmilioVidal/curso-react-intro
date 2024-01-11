import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButton } from '../TodoCreateButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';

import React from 'react';




function AppUI({
}) {
    const{
        loading,
        error,
        searchTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <>
            <div className='app'>
                <TodoCounter/>
                <TodoSearch/>
                
                <TodoList>
                    {loading && (<TodosLoading />)}
                    {error && <TodosError/>}
                    {(!loading && searchTodos.length === 0) && <EmptyTodos />}

                    {searchTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                    ))}
                </TodoList>
                <TodoCreateButton 
                    setOpenModal={setOpenModal}
                />

                {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
                )}
    
            </div>
        </>
    
      );
}

export { AppUI }