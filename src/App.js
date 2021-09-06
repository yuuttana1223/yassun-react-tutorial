import { useContext, useState } from "react";
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

function App({ data }) {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(data);

  const { theme } = useContext(ThemeContext);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab("list");
  };

  return (
    <SContainer theme={theme}>
      <Header tab={tab} setTab={setTab} />
      {tab === "list" ? (
        <List langs={langs} />
      ) : (
        <Form onAddLang={addLang /* (lang) => addLang(lang) */} />
      )}
    </SContainer>
  );
}

export default App;
