'use client'
import React from 'react'
import Links from './links/Links'
import Style from "./navbar.module.css"
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={Style.container}>

      <div className={Style.logo}>
        <Image src="/DALL·E LOGO.png" alt="Logo" width={150} height={140}  />
      </div>
      <Links />

    </div>    
  )
}

export default Navbar