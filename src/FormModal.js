import styled from "styled-components";
import { SButton } from "./components/button";
import { Modal } from "./components/modal";

const SContainer = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  background-color: white;
`;

const SButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const FormModal = ({ confirm, cancel }) => {
  return (
    <Modal>
      <SContainer>
        <div>本当に作成しますか？</div>
        <SButtonWrapper>
          <SButton onClick={cancel}>Cancel</SButton>
          <SButton onClick={confirm}>OK</SButton>
        </SButtonWrapper>
      </SContainer>
    </Modal>
  );
};
