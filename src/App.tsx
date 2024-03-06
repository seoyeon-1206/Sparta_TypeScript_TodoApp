import React, { useState } from "react";
import "./App.css";
import Todo from "./models/todo";
import Todos from "./components/Todos";
import GlobalStyle from "./styles/GlobalStyle";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "리액트 공부하기",
      description: "타입스크립트 강의 완강",
      isDone: false,
    },
    {
      id: 2,
      title: "타입스크립트 공부하기",
      description: "타입스크립트 강의 완강",
      isDone: false,
    },
  ]);
  return (
    <>
      <GlobalStyle />
      <div>투두리스트</div>
      <AddTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
