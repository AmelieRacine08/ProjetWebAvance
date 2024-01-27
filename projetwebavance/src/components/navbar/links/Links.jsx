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
    const [open,setOpen] = useState(false);

    const onClickHandler = ()=>{
        setOpen(!open);
    }

    return (
        <>
        {/***div container global*/}
        <div>
            {/***div container pour les liens desktop */}
            <div className={Style.containerLinks}>
                {
                    tab.map((item, index) => (

                        <Link
                            className={pathname === item.path ? `${Style.active}` : ''}
                            key={index} href={item.path}>{item.title}</Link>

                    ))
                }
            </div>

        </div>
        <div>
            {/***div container pour les liens mobile */}
            <button style={{backgroundColor:"lightblue"}} onClick={onClickHandler} className={Style.menuMobile}>Menu mobile</button>
            {                
                open && (
                <div className={Style.containerMobileLinks}>
                {
                    tab.map((item, index) => (

                        <Link
                            className={pathname === item.path ? `${Style.active}` : ''}
                            key={index} href={item.path}>{item.title}</Link>

                    ))
                }
            </div>

                )
            }
            

        </div>

        </>

    )
}

export default Links