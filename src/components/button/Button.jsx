import React from 'react';
import styles from './../../assets/styles/Button.module.css';

const Button = ({ text, color }) => {
  const buttonClass = color === 'primaryButton' ? styles.primaryButton : styles.secondaryButton;

  return <button className={buttonClass}>{text}</button>;
}

export default Button;