import React from 'react';
import styles from './../assets/styles/Button.module.css';

const Button = ({ text, color, typeButton }) => {

  const buttonProps = (color, typeButton) => {
    
    let className = styles.primaryButton;

    if(typeButton === 'ctaButton') {
      className = styles.ctaButton;
    }

    if(typeButton === 'loginAndRegisterButton') {
      className = styles.loginAndRegisterButton;
    }

    if(color === 'secondaryButton') {
      className = styles.secondaryButton;
    }

    return className;

  };

  const buttonClass = buttonProps(color, typeButton);

  return <button className={buttonClass}>{text}</button>;
}

export default Button;