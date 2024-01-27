'use client'
import React from 'react'
import Links from './links/Links'
import Style from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={Style.container}>
        
        <div>LOGO</div>
        <Links/> 
        <div>Log in</div>
        
      </div>
  )
}

export default Navbar