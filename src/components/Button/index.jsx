import { Component } from "react";
import Proptypes from "prop-types";

import "./style.css";

export class Button extends Component {
  render() {
    const { text, onClick, disabled = false } = this.props;

    return (
      <button disabled={disabled} className="button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
  disabled: Proptypes.bool,
};
