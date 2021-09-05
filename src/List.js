import React from "react";

export class List extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <div>
        <h4>{title}</h4>
        <div>リストです</div>
      </div>
    );
  }
}
