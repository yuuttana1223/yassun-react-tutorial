import { useState } from "react";
import styled from "styled-components";
import { SButton } from "./components/button";

const SContainer = styled.div`
  padding: 12px;
`;

const SLabel = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`;

const SInput = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border-end-end-radius: 1px solid black;
`;

const SButtonContainer = styled.div`
  margin-top: 24px;
`;

const SFormButton = styled(SButton)`
  width: 120px;
`;

export const Form = ({ onAddLang }) => {
  const [text, setText] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onAddLang(text);
  };
  return (
    <SContainer>
      <h4>新しい言語の追加</h4>
      <form onSubmit={submitForm}>
        <div>
          <SLabel>言語</SLabel>
          <SInput
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <SButtonContainer>
          <SFormButton>追加</SFormButton>
        </SButtonContainer>
      </form>
    </SContainer>
  );
};
