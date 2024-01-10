import "./TodoItem.css"

function TodoItem({text}){
    return(
        <li class = "task">
            <button class = "check"></button>
            <p class = "texto">{text}</p>
            <button class = "borrarT"></button>
        </li>
    );

}

export{ TodoItem }