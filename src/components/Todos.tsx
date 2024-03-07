import styled from "styled-components";
import Todo from "../models/todo";
import colors from "../styles/theme";

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
              <TodoListWrapper>
                <TodoDetail key={todo.id}>
                  <TodoTitle>{todo.title}</TodoTitle>
                  <TodoDescription>{todo.description}</TodoDescription>
                </TodoDetail>
                <ButtonWrapper>
                  <Button onClick={() => handleProgressUpdate(todo.id)}>
                    완료
                  </Button>
                  <Button
                    onClick={() => handleDelete(todo.id)}
                    borderColor={colors.mainPink}
                  >
                    삭제하기
                  </Button>
                </ButtonWrapper>
              </TodoListWrapper>
            ))}
        </WorkingWrapper>
        <DoneWrapper>
          <ProgressTitle color={colors.mainPink}>Done✅ </ProgressTitle>
          {props.todos
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <TodoListWrapper>
                <TodoDetail key={todo.id}>
                  <TodoTitle>{todo.title}</TodoTitle>
                  <TodoDescription>{todo.description}</TodoDescription>
                </TodoDetail>
                <ButtonWrapper>
                  <Button onClick={() => handleProgressUpdate(todo.id)}>
                    취소
                  </Button>
                  <Button
                    onClick={() => handleDelete(todo.id)}
                    borderColor={colors.mainPink}
                  >
                    삭제하기
                  </Button>
                </ButtonWrapper>
              </TodoListWrapper>
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

const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 412px;
  border-radius: 20px;
  border: 5px solid ${colors.mainColor};

  margin-bottom: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TodoDetail = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    border-top: 2px solid ${colors.mainColor};
    padding-top: 10px;
  }
`;
const TodoTitle = styled.h1`
  display: flex;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;
const TodoDescription = styled.p`
  display: flex;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 0px 20px;
  flex-direction: row;
  justify-content: space-between;
`;
const Button = styled.button<{ borderColor?: string }>`
  display: flex;
  justify-content: center;
  padding: 5px 0px;
  width: 156px;
  border-radius: 10px;
  border: 3px solid ${(props) => props.borderColor || colors.mainColor};
  outline: none;
  background-color: inherit;
  cursor: pointer;

  font-weight: 500;
  font-size: 20px;
`;
