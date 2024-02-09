import React from 'react'
import styles from './templatePage.module.css'
import ImageComponent from './ImageComponent'


const TemplatePage = ({
    title = "Festival de musique", 
    description = "Festival de musique variés", 
    textButton1 = "Read more", 
    textButton2 = "Contact", 
    src = "/home1.jpg", 
    altImg = "Image music"
}) => {
  return (
    <div className={styles.container}>
         <div className={styles.imgContainer}>
            <ImageComponent srcImg={src} alt={altImg} fill/>
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>{title}</h1>

            <p className={styles.description}>
               {description}
            </p>
            <div className={styles.buttons}>
                <button className={styles.button}>{textButton1}</button>
                <button className={styles.button}>{textButton2}</button>

            </div>
        </div>
    </div>
  )
}
export default TemplatePage
