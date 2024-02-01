'use client'
import React, { useState } from 'react'
import Style from './links.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tab = [
    {
        title: "Page d'acceuil",
        path: '/'
    },
    {
        title: 'Evenement 1',
        path: '/event1'
    },
    {
        title: 'Evenement 2',
        path: '/event2'
    },
    {
        title: 'Contact',
        path: '/contact'
    }
];


const Links = () => {
  
  const pathname = usePathname();
  
  const [open, setOpen] = useState(false);

  const onClickHander = () =>{
    setOpen(!open);
  }
    return (
      <>
        {/* Desktop layout */}
        <div className={Style.container}>
        {
          tab.map((item, index) => (
          <Link 
          className={ pathname === item.path ? `${Style.active}` : ''}
          key={index} href={item.path}>{item.title}</Link>
          ))
        }
        </div>
        {/* Mobile layout */}
        <div className={Style.containerMobile}>
        <button onClick={onClickHander}>Menu</button>
        {
           open && (
            tab.map((item, index) => (
              <Link 
              className={ pathname === item.path ? `${Style.active}` : ''}
              key={index} href={item.path}>{item.title}</Link>
              ))
           )
          
        }
        </div>
        
      </>
    

  )
}

export default Links