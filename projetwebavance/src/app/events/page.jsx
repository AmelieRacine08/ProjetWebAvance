import React from 'react'
import Styles from "./events.module.css"
import { Card } from '@mui/material'
import eventData from "../../data/dataEvents.json"

const Events = async() => {

    const getEvents = async ()=>{
        const res = await fetch("http://localhost:3000/api/events/")
       //const res = await fetch(eventData)

        if(!res.ok){
            throw new Error("Erreur lors du fetching data")
        }
    
        const data = await res.json();

        return data.events
    }

    const eventData = await getEvents()
    console.log(eventData)

    const urlImage = `/events/`    

  return (
    <div className={Styles.container}>
        {eventData &&
        eventData.map((element)=>(
            <Card {...element} src = {urlImage + element?.img} id={element?._id}/>
        ))}
    </div>
  )
}

export default Events