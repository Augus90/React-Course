import { TodoIcon } from './TodoIcon'
import './TodoItem.css'


function TodoItem({text, completed, onComplete, onDelete}){
    return (
        <li className={`itemLista`}>
            <button onClick={onComplete}>
                <TodoIcon type="check"/>
                
            </button>
            <p className={`${completed && "completado"}`}>{text}</p>
            <button onClick={onDelete}>
                <TodoIcon type="delete"/>
            </button>
        </li>
    )
  }

export {TodoItem}