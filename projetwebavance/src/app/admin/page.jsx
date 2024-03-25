import React from 'react'
import Styles from './adminPage.module.css'
import Link from 'next/link'
import RemoveBtn from '@/components/removeBtn/removeBtn'
import Image from 'next/image'

const getEvents = async()=>{

    try{
        const res = await fetch(`http://localhost:3000/api/events`,{cash:"no-store"})
        if(!res.ok){
            throw new Error("Erreur lors du fetching d'evenements")
        }
        const data = res.json();
        return data
    }catch(error){
        console.log("Erreur lors du fetching des evenements", error)
    }
}

const adminPage = async () => {
    const events = await getEvents()
  return (
    <div className={Styles.container}>
        <div className={Styles.containerTitleButton}>
            <h1 className={Styles.title}>Admin - Liste des evenements</h1>
            <div className={Styles.buttoncontainer}>
                <Link href="/admin/addEvent" className={Styles.button}>
                    Ajouter
                </Link>
            </div>
        </div>
        
        <table className={Styles.table}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Place</th>
                </tr>
            </thead>
            <tbody>
                {events?.events?.map((element) => ( // Avec .map() on doit avoir une key sinon ca donne une erreur
                <tr key={element._id}>
                    <td>
                        <div >
                            <Image 
                            src={`/events/${element.img}`}
                            height={50} 
                            width={50}
                            />
                        <div>
                            <td>{element.title}</td>
                        </div>
                        </div>
                    </td>
                    
                    <td>{element.description}</td>
                    <td>{element.date}</td>
                    <td>{element.place}</td>
                    <td>
                        <RemoveBtn id={element._id}/>
                    </td>
                </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default adminPage