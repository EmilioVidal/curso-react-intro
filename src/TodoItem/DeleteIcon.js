import React from "react";
import{ TodoIcon } from '../TodoIcon';

function DeleteIcon({ onDelete }){
    return(
        <TodoIcon 
        type= 'borrarT'
        onClick={onDelete}
        />
    );
}

export { DeleteIcon };