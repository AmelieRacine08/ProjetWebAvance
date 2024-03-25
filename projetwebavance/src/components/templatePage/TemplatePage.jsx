import React from "react";
import styles from "./templatePage.module.css";
import Image from "next/image";

const TemplatePage = ({
    title = "Festival de musique", 
    description = "Festival de musique variés", 
    textButton1 = "Read more", 
    textButton2 = "Contact", 
    src = "/home1.jpg", 
    altImg = "Image music",
    lienPage
}) => {
  return (
    <div className={styles.container}>
         <div className={styles.imgContainer}>
            <ImageComponent srcImg={src} alt={altImg}/>
        </div>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>{title}</h1>

            <p className={styles.description}>
               {description}
            </p>
            <div className={styles.buttons}>
                <a href={lienPage} target='_blank' rel='noopener noreferrer' className={styles.button}>{textButton1}</a>
                <a href={"/contact"} className={styles.button}>{textButton2}</a>
            </div>
        </div>
    </div>
    
  );
};
export default TemplatePage;
