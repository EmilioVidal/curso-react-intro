import "./TodoItem.css"
import { DeleteIcon } from "./DeleteIcon";
import { CompleteIcon } from "./CompleteIcon";

function TodoItem(props){
    return(
        <li className = "task">
            <div className= "content">
                <CompleteIcon 
                completed={props.completed}
                onComplete={props.onComplete}
                />
            <p className= {`texto ${props.completed && "TodoItem-l-completed"}`}>{props.text}</p>
            <DeleteIcon 
                onDelete={props.onDelete}
            />
            </div>
        </li>
    );

}

export{ TodoItem }