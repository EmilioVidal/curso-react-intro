import React from "react";
import "./TodosError.css"
import ClipLoader from "react-spinners/PacmanLoader";


function TodosError()
{
    return(
        <div className="ErrorTodo-container">
            <h2 className="error-text">ERROR</h2>
        <ClipLoader
        color={'#ffe737'}
        loading={true}
        size={150}
        />
      </div>
    );
}


export { TodosError }
