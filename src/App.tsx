import React, { useState } from "react"
import NewToDo from "./components/NewToDo"
import ToDoList from "./components/ToDoList"
import { ToDoObject } from "./todo.models"

function App() {
  const [todos, setTodos] = useState<ToDoObject[]>([])

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Math.random().toString(), text }]
    })
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))
  }

  return (
    <div className="App">
      <NewToDo onAddToDo={todoAddHandler} />
      <ToDoList items={todos} onDeleteToDo={todoDeleteHandler} />
    </div>
  )
}

export default App
