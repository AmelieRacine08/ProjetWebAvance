"use client";
import React, { useEffect, useState } from "react";
import Links from "./links/Links";
import Style from "./navbar.module.css";
import ToggleTheme from "../toggleTheme/ToggleTheme";

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

  return (
    <div
      className={`${Style.container} ${
        isVisible ? Style.visible : Style.hidden
      }`}
    >
      <div className={Style.logo}>FAO</div>
      <div style={{display:"flex", gap:"30px", justifyContent:"center"}}>
      <ToggleTheme/>
      <Links />
      </div>
      
    </div>
  );
};

export default Navbar;
