'use client'
import React from 'react'
import Links from './links/Links'
import Style from "./navbar.module.css"
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={Style.container}>
        
        <div> 
          <Image src="/DALL·E LOGO.png" alt="Logo" width={150} height={140}/>          
          </div>

        <Links/> 
        
        
      </div>
     // <div className={Style.logo}>LOGO</div>
    //  <div className={Style.linksContainer}>
      //  <Links />
     // </div>
   // </div>
  )
}

export default Navbar