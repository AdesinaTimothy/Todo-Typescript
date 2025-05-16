import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import {MdDone} from "react-icons/md"
import type {Todo} from "../src/model"
import { useEffect, useState } from "react";


interface Props  {
    todo: Todo;
    todos : Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
}


export default function SingleTodo({todo, todos, setTodos}: Props) {
    
    
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    
   

    // Function to to delete a todoItem  
    const handelDelete = (id: number) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }

    // Function to make todo item to be marked done 

    const handleDone = (id: number) => {
        setTodos(
            todos.map(todo => (
                todo.id === id? {...todo, isDone: !todo.isDone} : todo
            ))
        )

    
    }

    // Function to handle the edit funnction of the todoItem
    const handleEdit = (e: React.FormEvent , id: number) => {
        e.preventDefault();

        setTodos(
            todos.map((todo) => (
                todo.id === id ? {...todo, todo: editTodo}: todo
            ))
        )
        setIsEdit(false);

    }

    useEffect(() => {
        console.log("Edit mode chnaged:", isEdit)
    }, [isEdit]);
    
    return (
      <div className="singleTod-container">
        {isEdit ? 
        <form onSubmit={(e) => handleEdit(e, todo.id)}>
            <input 
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            ></input>
        </form> : 
        <div className="todotext-div">
        <p className={`${todo.isDone ? "isdone" : "text-todo"}`}>
            {todo.todo}
        </p>
    </div>
        }
        
        <div className="todo-icons">
          <span className="icon" onClick= {() => {
            if (!isEdit && !todo.isDone) {
                setIsEdit(!isEdit)
                
            }
          }
          }> <AiFillEdit/> </span>
          <span className="icon" onClick={() => handelDelete(todo.id)}> <AiFillDelete/> </span>
          <span className="icon" onClick={() => handleDone(todo.id)}> <MdDone/> </span>
        </div>
      </div>
    )
}



