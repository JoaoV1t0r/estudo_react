import { Component } from "react";

import "./style.css";

export class Button extends Component {
  render() {
    const { text, quandoClica, disabled } = this.props;

    return (
      <button disabled={disabled} className="button" onClick={quandoClica}>
        {text}
      </button>
    );
  }
}
