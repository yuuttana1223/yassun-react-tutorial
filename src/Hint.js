import React from "react";
import styled from "styled-components";

const SHintContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 12px;
`;

const SHintInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #757575;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const SPopupContainer = styled.div`
  position: absolute;
  left: 88%;
  bottom: 12px;
  display: flex;
  justify-content: center;
  padding: 8px;
  width: 140px;
  border: 1px solid black;
  border-radius: 8px;
`;

export class Hint extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
    this.ref = React.createRef();
  }

  componentDidUpdate() {
    const { current } = this.ref;
    if (current) {
      current.focus();
    }
  }

  render() {
    const { showPopup } = this.state;
    return (
      <SHintContainer>
        <SHintInner onClick={() => this.setState({ showPopup: true })}>
          ?
        </SHintInner>
        {showPopup && (
          /* tabIndex=0は 要素が入力フォーカスを持てること */
          <SPopupContainer
            ref={this.ref}
            onBlur={() => this.setState({ showPopup: false })}
            tabIndex={0}
          >
            言語の名前です
          </SPopupContainer>
        )}
      </SHintContainer>
    );
  }
}
