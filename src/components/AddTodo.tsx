import { useState } from "react";
import styled from "styled-components";
import { FaSquarePlus } from "react-icons/fa6";

const AddTodo: React.FC<{}> = (props) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
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
      <PlusButton>
        <FaSquarePlus size={40} color="black" />
      </PlusButton>
    </AddTodoWrapper>
  );
};
export default AddTodo;

const AddTodoWrapper = styled.div`
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
const PlusButton = styled.div``;
