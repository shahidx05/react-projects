import React, {useState} from 'react'
import { UseTodo } from '../context/TodoContext'

const TodoForm = () => {
    const {CreateTodo} = UseTodo()
    const [input, setInput] = useState("")

    const add = (e)=>{
        e.preventDefault()
        if(!input) return;
        CreateTodo(input)
        setInput('')
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={input}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>(setInput(e.target.value))}
            />
            <button 
            type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm