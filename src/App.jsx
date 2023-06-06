
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React, { useState } from 'react';

const defautlTodos = [
  {text: "Tarea 1", completed: false},
  {text: "Tarea 2", completed: true},
  {text: "Tarea 3", completed: true},
  {text: "Tarea 4", completed: false},
  {text: "Tarea 5", completed: true},
]

function App() {

  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState(defautlTodos)

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length
  const searchedTodos = todos.filter( (todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase())
  })

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }


  return (
    <div className='App'>
    
    <TodoCounter total={totalTodos} completed={completedTodos}/>
    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
    
    <TodoList>
      {/* <TodoItem/>
      <TodoItem/>
      <TodoItem/> */}
      {searchedTodos.map(todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed} 
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>

    <CreateTodoButton />
    </div>
  );
}


export default App;
