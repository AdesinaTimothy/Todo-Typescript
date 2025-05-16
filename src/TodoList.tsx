// import InputField from "./InputField";
import type {Todo} from "../src/model"
import SingleTodo from "./SingleTodo";


interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;


}


export default function TodoList({todos, setTodos}: Props) {
  return (
    <div className="todolist-container">
        {
          todos.map((todo) => (
            <SingleTodo todo = {todo} key = {todo.id} todos={todos} setTodos={setTodos}/>
          ))
        }
    </div>
  )
}
