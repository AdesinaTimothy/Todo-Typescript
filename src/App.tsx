
import { useState } from "react"
import InputField from "./InputField"
import TodoList from "./TodoList"
import type {Todo} from "../src/model"




function App () {

  const [todo, setTodo] = useState <string>("");
  const [todos, setTodos] = useState <Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();


        if(todo) {
          setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
          setTodo("")
        }

        // console.log(todo)
  }

  // const handleDelete = () => {
    
  // }


  return (
  <div className="global-container">
    <InputField todo = {todo} setTodo = {setTodo} handleAddTodo = {handleAddTodo}/>
    <TodoList todos = {todos} setTodos={setTodos}/>
    
  </div>
  )
}

export default App
