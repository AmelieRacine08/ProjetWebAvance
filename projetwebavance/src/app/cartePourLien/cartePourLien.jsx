import React from "react";
import Image from "next/image";
import Styles from "./CartePourLien.css";

const CartePourLien = (props) => {
  return (
    //   <div className={styles.cardContainer}>
    //       {isProfil ? (
    //           <img style={styles.cardImage} src={src} alt={alt}></img>
    //       ):(
    //           <img style={styles.cardImage} src={src} alt={alt}></img>
    //       )}

    //       <h1 style={styles.cardTitle}>{title}</h1>
    //       <p style={styles.carddescription}>{description}</p>
    //       <button style={styles.cardButton}>{textButton}</button>
    //   </div>
    <a href="#" className={Styles.lien}>
      <Image
        src={props.src}
        alt={props.alt}
        width={300}
        height={400}
        objectFit="cover"
        objectPosition="center"
      />
      <div>{props.name}</div>
    </a>
  );
};

export default CartePourLien;
