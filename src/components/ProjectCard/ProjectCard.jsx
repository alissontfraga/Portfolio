import React from "react";
import styles from "./ProjectCard.module.scss";

const Card = ({ image, title, description, children }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage}/>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description} </p>
        {children}
      </div>
    </div>
  );
};

export default Card;
