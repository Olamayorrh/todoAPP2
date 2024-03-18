
import React, {useState} from 'react'
import './App.css'
import { Component} from 'react'

import TodoForm from './Component/TodoForm'
import Showtodo from './Component/Showtodo'
import Header from './Component/Header'

function App() {
  const [inputValue, setinputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className='container'>
      <Header />
      <div>
      <TodoForm inputValue={inputValue} setinputValue={setinputValue} todos={todos} setTodos={setTodos}/>
      </div>
      <div>
      <Showtodo todos={todos} setTodos={setTodos}/>
      </div>
    
    </div>
  )
}




export default App;