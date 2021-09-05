import React from "react";
import styled from "styled-components";
import { SButton } from "./components/button";
import { TabBodyContainer } from "./components/tab-body-container";
import { FormModal } from "./FormModal";
import { Hint } from "./Hint";

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
    this.state = { text: "", showModal: false };
  }
  submitForm(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  render() {
    const { text, showModal } = this.state;
    const { onAddLang } = this.props;
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
            <Hint />
          </div>
          <SButtonContainer>
            <SFormButton>追加</SFormButton>
          </SButtonContainer>
        </form>
        {showModal && (
          <FormModal
            confirm={() => onAddLang(text)}
            cancel={() => this.setState({ showModal: false })}
          />
        )}
      </TabBodyContainer>
    );
  }
}
