import React from "react";
import { LANGUAGES } from "./const/languages";
import { Form } from "./Form";
import { List } from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: "list", langs: LANGUAGES };
  }

  addLang(lang) {
    // Formのthis.state.textがlangに入る
    this.setState({ tab: "list", langs: [...this.state.langs, lang] });
  }

  render() {
    const { tab, langs } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li onClick={() => this.setState({ tab: "list" })}>リスト</li>
            <li onClick={() => this.setState({ tab: "form" })}>フォーム</li>
          </ul>
        </header>
        <hr />
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
