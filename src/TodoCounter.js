import './TodoCounter.css'

// const estilos = {
//     backgroundColor: "red"
// }

function TodoCounter({ total, completed }){
    return (
        total === completed ? <h1 className='counter'>Haz completado todos los Todos</h1> : 
        <h1 className='counter'>Has completado 
            <span className='spanAccent'> {completed} </span>
            de <span className='spanAccent'> {total} </span>
        </h1>
    )
  }

  export {TodoCounter};