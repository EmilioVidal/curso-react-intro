import React from "react";
import "./EmptyTodos.css"
import ClipLoader from "react-spinners/ClimbingBoxLoader";

function EmptyTodos()
{
    return(
        <div className="EmptyTodo-container">
        <h2 className="empty-text">Crea tu primer Todo!!!</h2>
        <ClipLoader
        color={'#000000'}
        loading={true}
        size={25}
        />
    </div>
    );
}

export { EmptyTodos }
