import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [toDos, setToDos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newToDos = [todo, ...toDos];
    setToDos(newToDos);
  };

  const updateTodo = (todoId, newValue) =>{
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
      setToDos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const removeTodo = (id) => {
    const removeArr = [...toDos].filter((todo) => todo.id !== id);
    setToDos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedToDos = toDos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setToDos(updatedToDos);
  };

  return (
    <div>
      <h1>What's the plan for today..</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo toDos={toDos} completeTodo={completeTodo} removeTodo={removeTodo} 
      updateTodo= {updateTodo}/>
    </div>
  );
}

export default TodoList;
