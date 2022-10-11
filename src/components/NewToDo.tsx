import React, { useRef } from "react"

interface NewToDoProps {
  onAddToDo: (todoText: string) => void
}

const NewToDo: React.FC<NewToDoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    const enteredText = textInputRef.current!.value
    props.onAddToDo(enteredText)
    textInputRef.current!.value = ""
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add To Do</button>
    </form>
  )
}

export default NewToDo
