import React from "react";
import { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : " ");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const inputText = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput(" ");
  };

  return (
    <form className="todo-form " onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            className="todo-input edit"
            value={input}
            type="text"
            placeholder="Update the todo"
            name="text"
            onChange={inputText}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            className="todo-input"
            value={input}
            type="text"
            placeholder="Add a todo"
            name="text"
            onChange={inputText}
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
