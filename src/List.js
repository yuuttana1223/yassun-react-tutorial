import styled from "styled-components";

const SContainer = styled.div`
  padding: 12px 64px;
`;

const SListItem = styled.div`
  padding: 8px 16px;

  &:nth-of-type(n + 2) {
    border-top: 1px solid #d9e8de;
  }
`;

export const List = ({ langs }) => {
  return (
    <SContainer>
      {langs.map((lang, index) => (
        <SListItem key={index}>{lang}</SListItem>
      ))}
    </SContainer>
  );
};
