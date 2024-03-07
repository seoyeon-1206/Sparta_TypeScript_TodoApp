import "./App.css";
import Todos from "./components/Todos";
import GlobalStyle from "./styles/GlobalStyle";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <GlobalStyle />
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
