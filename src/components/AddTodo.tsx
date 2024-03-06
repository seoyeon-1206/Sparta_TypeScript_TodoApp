import { useState } from "react";
import styled from "styled-components";

const AddTodo: React.FC<{}> = (props) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  return (
    <AddTodoWrapper>
      <InputWrapper>
        <TitleWrapper></TitleWrapper>
        <DescriptionWrapper></DescriptionWrapper>
      </InputWrapper>
      <PlusButton></PlusButton>
    </AddTodoWrapper>
  );
};
export default AddTodo;

const AddTodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 20px;
`;
const InputWrapper = styled.div``;
const TitleWrapper = styled.div``;
const DescriptionWrapper = styled.div``;
const PlusButton = styled.div``;
