import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };
  const removeTodo = (index) => {
    setTodos((prev) => prev.slice(0, -1));
  };
  return (
    <div className="todo-container">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Enter a new todo..."
      />
      <button onClick={addTodo} className="todo-button">
        Add Todo
      </button>
      <button className="remove-button" onClick={removeTodo}>
        Remove Todo
      </button>
      <ul className="todo-list">
        {todos.map((todo, index) => {
          return (
            <li className="todo-item" key={index}>
              {todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
