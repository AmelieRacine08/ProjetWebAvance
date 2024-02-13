"use client";
import React, { useEffect, useState } from "react";
import Links from "./links/Links";
import Style from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Obtient la position de défilement verticale de la page
  //     const scrollPosition = window.scrollY;

  //     // Met à jour l'état isScrolled en fonction de la position de défilement
  //     setIsScrolled(scrollPosition > 0);
  //   };

  //   // Ajoute un écouteur d'événement pour le défilement
  //   window.addEventListener("scroll", handleScroll);

  //   // Nettoie l'écouteur d'événement lors du démontage du composant
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    // <div
    //   className={`${Style.container} ${isScrolled ? Style.scrolled : ""}`}
    //   style={{
    //     backgroundColor: isScrolled
    //       ? "rgba(246, 241, 235, 0.97)"
    //       : "transparent",
    //     color: isScrolled ? "#000000" : "#ffffff",
    //   }}
    // >
    <div
      className={`${Style.container} ${
        isVisible ? Style.visible : Style.hidden
      }`}
    >
      <div className={Style.logoContenant}>
        <p className={Style.logo}>FAO</p> 
      </div>
      <Links />
    </div>
  );
};

export default Navbar;
