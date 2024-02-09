import React from 'react'
import styles from "./card.module.css"

const Card = ({
  src="/", 
  alt="artiste", 
  title, 
  description, 
  textButton="Read more", 
  isProfil
}) => {
  return (
    <div className={styles.cardContainer}>
        {isProfil ? (
            <img styles={styles.cardImg} src={src} alt={alt}></img>
        ):(
            <img styles={styles.cardImg} src={src} alt={alt}></img>
        )}
        
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.carddescription}>{description}</p>
        <button className={styles.cardButton}>{textButton}</button>
    </div>

  )
}

export default Card
