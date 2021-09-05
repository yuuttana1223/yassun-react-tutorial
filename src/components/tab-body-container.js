import React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  padding: 12px 64px;
`;

export class TabBodyContainer extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <SContainer>
        <h4>{title}</h4>
        {children}
      </SContainer>
    );
  }
}
