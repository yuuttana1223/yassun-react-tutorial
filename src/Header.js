import { useContext } from "react";
import styled from "styled-components";
import { SButton } from "./components/button";
import { ThemeContext } from "./contexts/ThemeContext";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const SHeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const SHeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${(props) => (props.focused ? "2px solid #f44336" : "none")};
`;

const SHeaderButton = styled(SButton)`
  padding: 0;
  margin-bottom: 4px;
`;

export const Header = ({ tab, setTab }) => {
  // themeがないとExpected `onClick` listener to be a function, instead got a value of `object` type.
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <SHeader>
      <SHeaderUl>
        <SHeaderLi focused={tab === "list"} onClick={() => setTab("list")}>
          リスト
        </SHeaderLi>
        <SHeaderLi focused={tab === "form"} onClick={() => setTab("form")}>
          フォーム
        </SHeaderLi>
      </SHeaderUl>
      <SHeaderButton onClick={toggleTheme}>テーマ変更</SHeaderButton>
    </SHeader>
  );
};
