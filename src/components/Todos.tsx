import styled from "styled-components";
import Todo from "../models/todo";

const Todos: React.FC<{
  todos: Todo[];
}> = (props) => {
  return (
    <>
      <TodoListWrapper>
        {props.todos.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        ))}
      </TodoListWrapper>
    </>
  );
};

export default Todos;

const TodoListWrapper = styled.div`
  /* Group 100 */

  position: absolute;
  width: 411px;
  height: 191px;
  left: 232px;
  top: 414px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
