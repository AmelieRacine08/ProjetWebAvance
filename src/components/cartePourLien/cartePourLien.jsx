import React from "react";
import Styles from "./cartePourLien.module.css";
import Image from "next/image";

const CartePourLien = (props) => {
  return (
    <a href={props.href} className={Styles.lien}>
      <div className={Styles.imageContainer}>
        <Image
          src={props.src}
          alt={props.alt}
          width={350}
          height={200}
          className={Styles.customImage}
        />
      </div>
      <div className={Styles.divName}>{props.name}</div>
    </a>
  );
};

export default CartePourLien;
