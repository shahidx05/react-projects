import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center py-10">
      
      <h1 className="text-4xl font-bold text-white mb-8 tracking-wide">
        Redux Toolkit Todo
      </h1>

      <div className="w-full max-w-xl bg-gray-900 shadow-2xl rounded-2xl p-6 border border-gray-700">
        <AddTodo />
        <Todos />
      </div>

    </div>
  )
}

export default App