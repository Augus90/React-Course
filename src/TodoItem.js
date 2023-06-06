import { TodoIcon } from './TodoIcon'
import './TodoItem.css'


function TodoItem({text, completed, onComplete, onDelete}){
    return (
        <li className={`itemLista`}>
            <button onClick={onComplete}>
                <TodoIcon 
                    type="check" 
                    color={completed ? "green" : "white"}
                />
                
            </button>
            <p className={`${completed && "completado"}`}>{text}</p>
            <button onClick={onDelete}>
                <TodoIcon type="delete" color="none"/>
            </button>
        </li>
    )
  }

export {TodoItem}