'use client'
import React from 'react'
import Style from './links.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tab = [
    {
        title:'Home',
        path:'/'
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
  
  
    return (
    <div className={Style.container}>
        {
            tab.map((item, index) => (
            
            <Link 
            className={pathname === item.path ? `${Style.active}`:''}
            key={index} href={item.path}>{item.title}</Link>
                
            ))
        }
    </div>
  )
}

export default Links