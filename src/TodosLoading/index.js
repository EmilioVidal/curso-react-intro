import React from "react";
import "./TodosLoading.css"
import ClipLoader from "react-spinners/HashLoader";

function TodosLoading()
{
    return(
        <div className="LoadingTodo-container">
        <ClipLoader
        color={'#f4f4f4'}
        loading={true}
        size={150}
        />
      </div>
      
    );
}


export { TodosLoading }
