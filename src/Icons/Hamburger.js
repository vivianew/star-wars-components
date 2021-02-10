import React from 'react';
import PropTypes from 'prop-types';

const HamburgerIcon = ({ burgerClick, className }) => (
  <svg viewBox="0 0 100 80" width="40" height="40" className={className} onClick={burgerClick}>
    <rect width="90" height="6"></rect>
    <rect y="30" width="90" height="6"></rect>
    <rect y="60" width="90" height="6"></rect>
  </svg>
);

HamburgerIcon.propTypes = {
  burgerClick: PropTypes.func,
  className: PropTypes.string,
}

HamburgerIcon.defaultProps = {
  burgerClick: null,
  className: '',
}

export default HamburgerIcon;