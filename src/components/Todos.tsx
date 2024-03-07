import styled from "styled-components";
import Todo from "../models/todo";
import colors from "../styles/theme";
import TodoItem from "./TodoItem";

const Todos: React.FC<{
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}> = (props) => {
  const handleDelete = (id: string) => {
    const updateTodos = props.todos.filter((todo) => todo.id != id);
    props.setTodos(updateTodos);
  };

  const handleProgressUpdate = (id: string) => {
    const updateTodos: Todo[] = props.todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    props.setTodos(updateTodos);
  };

  return (
    <Container>
      <ProgressWrapper>
        <WorkingWrapper>
          <ProgressTitle>working🔥</ProgressTitle>
          {props.todos
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={handleDelete}
                onProgressUpdate={handleProgressUpdate}
              />
            ))}
        </WorkingWrapper>
        <DoneWrapper>
          <ProgressTitle color={colors.mainPink}>Done✅ </ProgressTitle>
          {props.todos
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={handleDelete}
                onProgressUpdate={handleProgressUpdate}
              />
            ))}
        </DoneWrapper>
      </ProgressWrapper>
    </Container>
  );
};

export default Todos;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`;

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;
const WorkingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProgressTitle = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 60px;
  background-color: ${(props) => props.color || colors.mainYellow};
  align-items: center;
  font-size: 40px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const DoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
