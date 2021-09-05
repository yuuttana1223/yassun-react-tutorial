import { useEffect, useState } from "react";
import { getLanguages } from "./const/languages";
import { Form } from "./Form";
import { List } from "./List";

function App() {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    console.log("App.js: useEffect");
    fetchLaguages();
  }, []);

  const fetchLaguages = async () => {
    const languages = await getLanguages();
    setLangs(languages);
  };

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab("list");
  };

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab("list")}>リスト</li>
          <li onClick={() => setTab("form")}>フォーム</li>
        </ul>
      </header>
      <hr />
      {tab === "list" ? (
        <List langs={langs} />
      ) : (
        <Form onAddLang={addLang /* (lang) => addLang(lang) */} />
      )}
    </div>
  );
}

export default App;
