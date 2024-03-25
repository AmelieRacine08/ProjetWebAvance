import TemplatePage from "@/components/templatePage/TemplatePage"
import Styles from "./eventDetails.module.css"
import Link from "next/link"

const getEventById = async (id)=>{
    const res = await fetch(`http://localhost:3000/api/events/${id}`)

    if(!res.ok){
        throw new Error("Erreur lors du fetching data")
    }

    const data = await res.json();
    return data.event
}

const EventDetails = async ({params}) =>{

    const event = await getEventById(params.eventId);
    const urlImage = `/event/${event.img}`;

    return(
        <div className={Styles.container}>
            <Link key={event.id} href="/events">
                Retour a la liste
            </Link>
            {event ?(
                <>
                    <TemplatePage
                        title={event.title}
                        description={event.description}
                        src={urlImage}
                    />
                </>
            ):(
                <div className={Styles.titre}>
                    L'evenement {params.eventId} n'existe pas
                </div>
            )}
        </div>
    )
}

export default EventDetails