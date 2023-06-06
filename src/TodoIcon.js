import {FiCheck} from 'react-icons/fi'
import { ReactComponent as TrashSVG} from './trash.svg'

const iconType = {
    "check": (color) => <FiCheck size={24} color={color}/>,
    "delete": (color) => <TrashSVG fill={color}/>,
}

function TodoIcon({type, color}){
    return(
        <span className={`${type}Button icono`}>
            {iconType[type](color)}
        </span>
    )
}

export {TodoIcon};