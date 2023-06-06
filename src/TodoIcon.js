import {FiCheck} from 'react-icons/fi'
import { ReactComponent as TrashSVG} from './trash.svg'

const iconType = {
    "check": <FiCheck size={24}/>,
    "delete": <TrashSVG/>,
}

function TodoIcon({type}){
    return(
        <span className={`${type}Button icono`}>
            {iconType[type]}
        </span>
    )
}

export {TodoIcon};