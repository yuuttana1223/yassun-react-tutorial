import styled from "styled-components";

const SContainer = styled.div`
  padding: 12px 64px;
`;

export const TabBodyContainer = ({ children, title }) => {
  return (
    <SContainer>
      <h4>{title}</h4>
      {children}
    </SContainer>
  );
};
