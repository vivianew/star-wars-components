import React from 'react';
import PropTypes from "prop-types";
import './button.scss';

const Button = ({ type, label, onClick }) => {
  return (
    <button type={type} className="button__button" onClick={onClick}>
      {label}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: '',
  label: '',
  onClick: null,
}

export default Button;