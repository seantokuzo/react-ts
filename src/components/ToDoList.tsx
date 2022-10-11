import React from "react"

interface TodoListProps {
  items: { id: string; text: string }[]
  onDeleteToDo: (todoId: string) => void
}

const ToDoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => props.onDeleteToDo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default ToDoList
