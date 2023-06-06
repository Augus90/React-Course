
function TodoList(porps){
    return (
        <div>
            <ul style={{
                    backgroundColor: '#191919',
                    alignSelf: 'center',
                    width: '50vw',
                    borderRadius: '30px',
                    margin: '16px',
                    padding: '30px',
                    listStyle: 'none',
                }}>
                {porps.children}
            </ul>
        </div>
    )
  }

  export {TodoList};