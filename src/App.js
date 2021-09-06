import React from "react";
import styled from "styled-components";
import { ThemeContext } from "./contexts/ThemeContext";
import { Form } from "./Form";
import { Header } from "./Header";
import { List } from "./List";

const SContainer = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor}; ;
`;

class App extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = { tab: "list", langs: props.data };
  }

  addLang(lang) {
    // Formのthis.state.textがlangに入る
    this.setState({ tab: "list", langs: [...this.state.langs, lang] });
  }

  render() {
    const { tab, langs } = this.state;
    const [theme] = this.context;
    return (
      <SContainer theme={theme}>
        <Header tab={tab} setTab={(t) => this.setState({ tab: t })} />
        {tab === "list" ? (
          <List langs={langs} />
        ) : (
          <Form onAddLang={(lang) => this.addLang(lang)} />
        )}
      </SContainer>
    );
  }
}

export default App;
