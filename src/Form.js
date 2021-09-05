import React from "react";
import styled from "styled-components";
import { SButton } from "./components/button";
import { TabBodyContainer } from "./components/tab-body-container";

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

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  submitForm(e) {
    e.preventDefault();
    this.props.onAddLang(this.state.text);
  }

  render() {
    const { text } = this.state;
    return (
      <TabBodyContainer title="新しい言語の追加">
        <form onSubmit={(e) => this.submitForm(e)}>
          <div>
            <SLabel>言語</SLabel>
            <SInput
              type="text"
              value={text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
          </div>
          <SButtonContainer>
            <SButton>追加</SButton>
          </SButtonContainer>
        </form>
      </TabBodyContainer>
    );
  }
}
