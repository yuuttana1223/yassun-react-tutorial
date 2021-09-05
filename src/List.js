import React from "react";

export class List extends React.Component {
  // 終了時
  componentWillUnmount() {
    console.log("List.js: componentWillUnmount");
  }

  render() {
    const { langs } = this.props;
    return (
      <div>
        {langs.map((lang, index) => (
          <div key={index}>{lang}</div>
        ))}
      </div>
    );
  }
}
