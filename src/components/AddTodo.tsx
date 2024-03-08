import { useState } from "react";
import styled from "styled-components";
import { FaSquarePlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import colors from "../styles/theme";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todosSlice";

const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleAddTodo = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    if (!title || !description) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    // 새로운 할 일 생성
    dispatch(
      addTodo({
        id: uuidv4(),
        title,
        description,
        isDone: false,
      })
    );

    // input 초기화
    setTitle("");
    setDescription("");
  };

  return (
    <AddTodoContainer>
      <div>TodoList</div>
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
        <StyledFaSquarePlus onClick={handleAddTodo} size={40} color="white" />
      </AddTodoWrapper>
    </AddTodoContainer>
  );
};
export default AddTodo;

const AddTodoContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.mainColor};
  margin-bottom: 40px;

  & div {
    font-weight: 700;
    font-size: 48px;
  }
`;

const AddTodoWrapper = styled.form`
  display: flex;
  flex-direction: row;
  padding-top: 40px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  & p {
    font-weight: 600;
    font-size: 20px;
  }

  & input {
    outline: none;
    font-size: 20px;
    border-radius: 10px;
    border: none;
    padding: 10px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-right: 40px;
  align-items: center;
`;

const StyledFaSquarePlus = styled(FaSquarePlus)`
  cursor: pointer;
  border: none;
  background: none;
  &:hover {
    fill: ${colors.subColor}; /* 마우스를 가져갔을 때 색 변경 */
  }
`;
