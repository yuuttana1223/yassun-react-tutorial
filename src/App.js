import React from "react";
import { Form } from "./Form";
import { List } from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "クリック前の表示", tab: "list" };
  }

  render() {
    const { tab } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li onClick={() => this.setState({ tab: "list" })}>リスト</li>
            <li onClick={() => this.setState({ tab: "form" })}>フォーム</li>
          </ul>
        </header>
        <hr />
        {tab === "list" ? <List /> : <Form />}
      </div>
    );
  }
}

export default App;
