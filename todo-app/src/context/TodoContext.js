import { createContext, useContext } from "react";

const TodoContext = createContext(null);

export const useTodo = ()=>{
    return useContext(TodoContext)
}

const TodoProvider = ()=>{
    
}