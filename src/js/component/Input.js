import React, { useState } from "react";

const Input = () => {
  const [todos, setTodos] = useState("");
  return (
    <div>
      <div className="mt-5 container input-group flex-nowrap">
        <span className="input-group-text Nombre" id="addon-wrapping">
          Nombre
        </span>

        <input
          type="text"
          className="form-control"
          placeholder="Ingresa tu nombre"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={(e) => {
            console.log(e.target.value);
            setTodos(e.target.value);
          }}
        />
      </div>

      <div>
        <div className="d-flex justify-content-center">
          <button
            className=" restablecer btn btn-light mt-3"
            onClick={() => {
              setTodos("");
            }}
          >
            Restablecer
          </button>
        </div>

        <h1 className="mt-3 d-flex justify-content-center">Mi nombre es:</h1>
      </div>
    </div>
  );
};

export default Input;
