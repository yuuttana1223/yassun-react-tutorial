import React from "react";

export class List extends React.Component {
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
