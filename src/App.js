import { useState } from "react";
import styled from "styled-components";
import { getLanguages } from "./const/languages";
import { Form } from "./Form";
import { withLoading } from "./hoc/withLoading";
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

function App({ data }) {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(data);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab("list");
  };

  return (
    <div>
      <SHeader>
        <SHeaderUl>
          <SHeaderLi focused={tab === "list"} onClick={() => setTab("list")}>
            リスト
          </SHeaderLi>
          <SHeaderLi focused={tab === "form"} onClick={() => setTab("form")}>
            フォーム
          </SHeaderLi>
        </SHeaderUl>
      </SHeader>
      {tab === "list" ? (
        <List langs={langs} />
      ) : (
        <Form onAddLang={addLang /* (lang) => addLang(lang) */} />
      )}
    </div>
  );
}

export default withLoading(App, getLanguages);
