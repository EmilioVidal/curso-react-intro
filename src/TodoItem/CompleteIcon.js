import React from "react";
import{ TodoIcon } from '../TodoIcon';

function CompleteIcon({ completed, onComplete }){
    return(
        <TodoIcon 
        type={completed ? 'checkM' : 'check'}
        onClick={onComplete}
        />
    );
}

export { CompleteIcon };