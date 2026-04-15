import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleComplete, editTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")

  return (
    <>
      <h2 className="text-xl text-gray-300 mb-3">Your Todos</h2>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded-xl"
          >
            {/* LEFT SIDE */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleComplete(todo.id))}
              />

              {editId === todo.id ? (
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="bg-gray-700 text-white px-2 py-1 rounded"
                />
              ) : (
                <span
                  className={`text-white ${todo.completed ? "line-through text-gray-400" : ""
                    }`}
                >
                  {todo.text}
                </span>
              )}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex gap-2">
              {editId === todo.id ? (
                <button
                  onClick={() => {
                    dispatch(editTodo({ id: todo.id, text: editText }))
                    setEditId(null)
                  }}
                  className="bg-green-500 px-2 py-1 rounded text-white"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditId(todo.id)
                    setEditText(todo.text)
                  }}
                  className="bg-yellow-500 px-2 py-1 rounded text-white"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 px-2 py-1 rounded text-white"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos