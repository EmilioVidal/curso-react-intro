import React from "react";
import "./TodoCreateButton.css"

function TodoCreateButton({ setOpenModal })
{
    return(
        <div className="centrar">
        <button className="mas" onClick={()=>{
        setOpenModal(state =>!state)
        }}></button>
        </div>
    );
}


export { TodoCreateButton };