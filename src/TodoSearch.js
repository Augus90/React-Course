import './TodoSearch.css'
import { FiPlus } from 'react-icons/fi'
 
function TodoSearch({searchValue, setSearchValue}){

    return (
        <div className="searchList">
            <input 
                className='inputTodo' 
                placeholder="Buscar..."
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}/>
            <button>
                <FiPlus size={32}/>
            </button>
        </div>
    )
  }

  export {TodoSearch};