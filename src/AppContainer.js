import React from "react";
import App from "./App";
import { getLanguages } from "./const/languages";
import { ThemeContext, THEMES } from "./contexts/ThemeContext";
import { withLoading } from "./hoc/withLoading";

const AppComponent = withLoading(App, getLanguages);

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: THEMES.dark };
  }

  toggleTheme() {
    const nextTheme =
      this.state.theme === THEMES.dark ? THEMES.light : THEMES.dark;
    this.setState({ theme: nextTheme });
  }

  render() {
    const { theme } = this.state;
    return (
      // valueにはclassではひとつのものしか渡せないので配列で渡している
      <ThemeContext.Provider value={[theme, () => this.toggleTheme()]}>
        <AppComponent />
      </ThemeContext.Provider>
    );
  }
}
