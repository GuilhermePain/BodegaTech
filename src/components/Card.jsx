import React, { useState } from 'react';
import styles from '../assets/styles/Card.module.css';

function Card({ image, text, altText }) {

  const [isHoverd, setIsHoveres] = useState(false);

  let classCard = styles.card;

  const handleMouseEnter = () => {
      setIsHoveres(true);
  };

  const handleMouseLeave = () => {
      setIsHoveres(false);
  };

  return (
    <div className={classCard}>
        <img src={image} alt={altText} />
        <h2>{text}</h2>
    </div>
  );
};

export default Card;