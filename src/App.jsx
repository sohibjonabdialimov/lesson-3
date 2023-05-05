import { useState } from "react"
import Form from "./components/Form/Form";
import List from "./components/List/List";
import './App.css'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  return (
    <>
     <div className="app">
        <h1>Todo App</h1>
        <Form setTodos={setTodos} todos={todos} />
        <List setTodos={setTodos} todos={todos} />
     </div>
    </>
  )
}

export default App
