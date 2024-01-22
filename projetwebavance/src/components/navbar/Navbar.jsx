import React from 'react'
import Links from './links/Links'
import Style from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={Style.container}>
        <div>LOGO</div>
        
        <Links/></div>
  )
}

export default Navbar