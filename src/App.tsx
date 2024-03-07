import React, { useState } from "react";
import "./App.css";
import Todo from "./models/todo";
import Todos from "./components/Todos";
import GlobalStyle from "./styles/GlobalStyle";
import AddTodo from "./components/AddTodo";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/modules/todosSlice";

function App() {
  const dispatch = useDispatch();
  const handleAddTodoList = (newTodo: Todo) => {
    dispatch(addTodo(newTodo));
  };

  return (
    <>
      <GlobalStyle />
      <AddTodo onAddTodo={handleAddTodoList} />
      <Todos />
    </>
  );
}

export default App;
