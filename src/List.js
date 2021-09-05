import React from "react";
import styled from "styled-components";
import { TabBodyContainer } from "./components/tab-body-container";

const SListItem = styled.div`
  padding: 8px 16px;
  &:nth-of-type(n + 2) {
    border-top: 1px solid #d9e8de;
  }
`;

export class List extends React.Component {
  // 終了時

  render() {
    const { langs } = this.props;
    return (
      <TabBodyContainer title="取り扱い言語リスト">
        {langs.map((lang, index) => (
          <SListItem key={index}>{lang}</SListItem>
        ))}
      </TabBodyContainer>
    );
  }
}
