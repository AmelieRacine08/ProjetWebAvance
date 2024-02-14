import React from 'react'
import styles from "./card.module.css"


const Card = ({
  src="/", 
  alt="artiste", 
  title, 
  description, 
  textButton="Read more", 
  lienPage
}) => {
 
  return (
    <div className={styles.cardContainer}>
       <div className={styles.cardFlipper}>
        <div className={styles.front}>         
          <img className={styles.cardImg} src={src} alt={alt}/>
          <h1 className={styles.cardTitle}>{title}</h1>
        </div>
        <div className={styles.back}>
          <p className={styles.cardDescription}>{description}</p>
          <a href={lienPage} target='_blank' rel='noopener noreferrer' className={styles.cardButton} >{textButton}</a>
        </div>
       </div>
    </div>

  )
}

export default Card
