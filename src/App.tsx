import React, { useState } from "react";
import "./App.css";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "리액트 공부하기",
      description: "타입스크립트 강의 완강",
      isDone: false,
    },
  ]);
  return <div>투두리스트</div>;
}

export default App;
