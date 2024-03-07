import styled from "styled-components";
import colors from "../styles/theme";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todosSlice";
import Todo from "../models/todo";

const Todos: React.FC = () => {
  const todos = useSelector((state: { todos: Todo[] }) => state.todos);

  return (
    <Container>
      <ProgressWrapper>
        <WorkingWrapper>
          <ProgressTitle>working🔥</ProgressTitle>
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
        </WorkingWrapper>
        <DoneWrapper>
          <ProgressTitle color={colors.mainPink}>Done✅ </ProgressTitle>
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
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
