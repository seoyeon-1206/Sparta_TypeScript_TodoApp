import styled from "styled-components";
import colors from "../styles/theme";
import Todo from "../models/todo";
import React from "react";

interface TodoItemPrps {
  todo: Todo;
  onDelete: (id: string) => void;
  onProgressUpdate: (id: string) => void;
}

const TodoItem: React.FC<TodoItemPrps> = ({
  todo,
  onProgressUpdate,
  onDelete,
}) => {
  const handleDelete = () => {
    onProgressUpdate(todo.id);
  };

  const handleProgressUpdate = () => {
    onDelete(todo.id);
  };

  return (
    <TodoListWrapper>
      <TodoDetail key={todo.id}>
        <TodoTitle>{todo.title}</TodoTitle>
        <TodoDescription>{todo.description}</TodoDescription>
      </TodoDetail>
      <ButtonWrapper>
        <Button onClick={handleProgressUpdate}>
          {todo.isDone ? "취소" : "완료"}
        </Button>
        <Button onClick={handleDelete} borderColor={colors.mainPink}>
          삭제하기
        </Button>
      </ButtonWrapper>
    </TodoListWrapper>
  );
};

export default TodoItem;

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
