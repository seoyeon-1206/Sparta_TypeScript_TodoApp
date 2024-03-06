import { useState } from "react";
import styled from "styled-components";
import { FaSquarePlus } from "react-icons/fa6";
import Todo from "../models/todo";
import { v4 as uuidv4 } from "uuid";

const AddTodo: React.FC<{ onAddTodo: (newTodo: Todo) => void }> = (props) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!title || !description) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    // 새로운 할 일 생성
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      description,
      isDone: false,
    };

    // 새로운 할 일을 app컴포넌트로 전달
    props.onAddTodo(newTodo);

    // input 초기화
    setTitle("");
    setDescription("");
  };

  return (
    <AddTodoWrapper>
      <InputWrapper>
        <TitleWrapper>
          <p>제목</p>
          <input type="text" value={title} onChange={handleTitleChange} />
        </TitleWrapper>
        <DescriptionWrapper>
          <p>내용</p>
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </DescriptionWrapper>
      </InputWrapper>
      <PlusButton onClick={handleAddTodo}>
        <FaSquarePlus size={40} color="black" />
      </PlusButton>
    </AddTodoWrapper>
  );
};
export default AddTodo;

const AddTodoWrapper = styled.form`
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;

  & p {
    font-weight: 500;
    font-size: 40px;
  }

  & input {
    outline: none;
    font-size: 20px;
    border-radius: 20px;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-right: 40px;
`;
const PlusButton = styled.button`
  cursor: pointer;
  border: none; /* 버튼의 기본 스타일 제거 */
  background: none; /* 배경색 제거 */
  padding: 0; /* 패딩 제거 */
  margin: 0; /* 마진 제거 */
`;
