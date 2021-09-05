import React from "react";
import styled from "styled-components";
import { Form } from "./Form";
import { List } from "./List";

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: "list", langs: [] };
  }

  addLang(lang) {
    // Formのthis.state.textがlangに入る
    this.setState({ tab: "list", langs: [...this.state.langs, lang] });
  }

  render() {
    const { tab, langs } = this.state;
    return (
      <div>
        <SHeader>
          <SHeaderUl>
            <SHeaderLi
              focused={tab === "list"}
              onClick={() => this.setState({ tab: "list" })}
            >
              リスト
            </SHeaderLi>
            <SHeaderLi
              focused={tab === "form"}
              onClick={() => this.setState({ tab: "form" })}
            >
              フォーム
            </SHeaderLi>
          </SHeaderUl>
        </SHeader>
        {tab === "list" ? (
          <List langs={langs} />
        ) : (
          <Form onAddLang={(lang) => this.addLang(lang)} />
        )}
      </div>
    );
  }
}

export default App;
