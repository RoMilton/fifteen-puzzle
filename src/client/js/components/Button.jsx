// generic button component
import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Button = (props) => {
  const getButtonCSS = () => classNames({
     button: true,
     [`button--${props.cssModifier}`]: (props.cssModifier),
  });

  return (
    <span 
      className={getButtonCSS()}
      role="button"
      onClick= {props.onClick}
    >
      {props.text}
    </span>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired, // text to display in button
  cssModifier: PropTypes.string, // css modifier to append to css class
  onClick: PropTypes.func, // fired when button is clicked
};

Button.defaultProps = {
  onClick: () => {},
}

export default Button;
