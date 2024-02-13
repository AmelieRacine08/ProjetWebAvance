import React from "react";
import Styles from "./footer.module.css";


function Footer() {
  return (
    <footer className={Styles.container}>
      <p>© 2024 Festival Accro Ottawa. Tous droits réservés.</p>
      <p>   
        <a href={"/contact"} className={Styles.lienContact}>Contactez-nous</a>      
      </p>
      
      
    </footer>
  )
}

export default Footer;
