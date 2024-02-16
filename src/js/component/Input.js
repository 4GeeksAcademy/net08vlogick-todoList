import React, { useState } from "react";

const Input = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const deleteTodo = (index) => {
    return () => {
      setTodos(todos.filter((_, i) => i !== index));
    };
  };
  const onKey = (event) => {
    if (event.key === "Enter") {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  return (
    <div className="mt-5 text-center container">
      <h1 className="title ">Todo list</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            value={input}
            type="text"
            className="form-control"
            placeholder="Nueva tarea"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onKeyDown={onKey}
            onChange={(e) => {
              console.log(e.target.value);
              setInput(e.target.value);
            }}
          />
        </li>
        {todos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            {todo}
            <button
              type="button"
              className="btn deleteButton"
              onClick={deleteTodo(index)}
            >
              X
            </button>
          </li>
        ))}

        <li className="tasks list-group-item">{todos.length} Tasks</li>
      </ul>
    </div>
  );
};

export default Input;
