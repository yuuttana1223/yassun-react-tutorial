import React from "react";
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
  border-bottom: ${({ focused }) => (focused ? "2px solid #f44336" : "none")};
`;

const SHeaderButton = styled(SButton)`
  padding: 0;
  margin-bottom: 4px;
`;

export class Header extends React.Component {
  static contextType = ThemeContext;
  render() {
    const { tab, setTab } = this.props;
    const [theme, toggleTheme] = this.context;
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
        <SHeaderButton onClick={toggleTheme}>テーマの変更</SHeaderButton>
      </SHeader>
    );
  }
}
