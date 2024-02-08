import React from "react";
import styles from "./card.module.css";

const Card = ({
  src = "/",
  alt = "artiste",
  title,
  description,
  textButton = "Read more",
  isProfil,
}) => {
  return (
    <div className={styles.cardContainer}>
      {isProfil ? (
        <img style={styles.cardImage} src={src} alt={alt}></img>
      ) : (
        <img style={styles.cardImage} src={src} alt={alt}></img>
      )}

      <h1 style={styles.cardTitle}>{title}</h1>
      <p style={styles.carddescription}>{description}</p>
      <button style={styles.cardButton}>{textButton}</button>
    </div>
  );
};

export default Card;
