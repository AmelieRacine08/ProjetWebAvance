import React from 'react'
import Links from './links/Links'
import Style from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={Style.container}>
      <div className={Style.logo}>LOGO</div>
      <div className={Style.linksContainer}>
        <Links />
      </div>
    </div>
  )
}

export default Navbar