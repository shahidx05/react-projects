import React, { useState } from 'react'
import './App.css'
import { Trash } from 'lucide-react'

const App = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    setTask([...task, { title, content }]);
    setContent('')
    setTitle('')
  }

  const deletehandler = (indexToDelete) => {
    const updatedTasks = [...task];
    updatedTasks.splice(indexToDelete, 1);
    setTask(updatedTasks);
  }

  return (
    <>
      <h1>📝 Notes App</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <textarea placeholder='Content' name="" id="" value={content} onChange={(e) => { setContent(e.target.value) }} ></textarea>
        <button type='submit'>Create Note</button>
      </form>
      <h2>Recent Notes</h2>
      <div className='notes-container'>
        {task.length === 0 ? (
          <p className='empty-msg' >No notes available. Please add some notes. ✨</p>
        ) : (task.map((note, index) => (
          <div key={index} className="note">
            <div>
              <h3>{note.title}</h3>
              <Trash onClick={() => deletehandler(index)} />
            </div>
            <p>{note.content}</p>
          </div>
        )))}
      </div>
    </>
  )
}

export default App