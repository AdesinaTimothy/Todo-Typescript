

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: (e: React.FormEvent) => void;

}


export default function InputField({todo, setTodo, handleAddTodo} : Props) {
    // console.log(todo)


  return (
    <div className="inputField-container">
      <form action="" className="inputField-form" onSubmit={(e) => handleAddTodo(e)}>
            <div className="input-wrapper">
                <input 
                    type="text" 
                    placeholder="Enter Todo Task"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)} 
                />
                <button className="input-submit">Go</button>
            </div>
      </form>
    </div>
  )
}
