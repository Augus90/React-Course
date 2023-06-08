
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React, { useState } from 'react';

// const defautlTodos = [
//   {text: "Tarea 1", completed: false},
//   {text: "Tarea 2", completed: true},
//   {text: "Tarea 3", completed: true},
//   {text: "Tarea 4", completed: false},
//   {text: "Tarea 5", completed: true},
// ]
// localStorage.setItem('TODOS_V1', defautlTodos);
// localStorage.removeItem('TODOS_V1');

function useLocalStorage(itemName, initialValue){
  
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveItem]
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')

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
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
      );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
