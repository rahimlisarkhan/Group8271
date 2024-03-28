import React, { useState } from "react";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    //? ....
    const newTodos = [todo, ...todos];
    setTodos(newTodos);

    // setTodos((prevTodos) => [todo, ...prevTodos]);

    console.log("addTodo:", todo);
  }

  function rmvTodo(id) {
    console.log("id:", id);

    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    //? ....
  }
  function updateTodo(id, todo) {
    
    //? ....
  }

  console.log("todos", todos);

  return (
    <>
      <TodoInput onData={addTodo} />
      <TodoList list={todos} onRemove={rmvTodo}  />
    </>
  );
}

export default Todo;
