import React from 'react'
import styles from './templatePage.module.css'
import Image from 'next/image'
import { ImageComponent } from '../ImageComponent'


const TemplatePage = ({
    title, 
    description, 
    textButton1, 
    textButton2, 
    srcImg, 
    altImg
}) => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>{title}</h1>

            <p className={styles.description}>
               {description}
            </p>
            <div className={styles.buttons}>
                <button className={styles.button}>Read more</button>
                <button className={styles.button}>Contact</button>

            </div>
        </div>
        <div className={styles.imgContainer}>
            <ImageComponent src={srcImg} alt={altImg} fill/>

        </div>

    </div>
  )
}
export default TemplatePage
