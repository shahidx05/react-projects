import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos : [],
    CreateTodo : (todo) => {},
    UpdateTodo : (todo, id) => {},
    DeleteTodo : (id) => {},
    MarkTodo: (id)=>{}
});

export const UseTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;

export default TodoContext