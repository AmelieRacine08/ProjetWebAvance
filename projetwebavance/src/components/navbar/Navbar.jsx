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

  return (
    <div
      className={`${Style.container} ${
        isVisible ? Style.visible : Style.hidden
      }`}
    >
      <div className={Style.logo}>
        {/* <Image src="/DALL·E LOGO.png" alt="Logo" width={150} height={140} /> */}
        LOGO
      </div>
      <Links />
    </div>
  );
};

export default Navbar;
