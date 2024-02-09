import React from 'react'
import TemplatePage from '../../components/templatePage/TemplatePage'

const description = "Rejoignez le Bluesfest 2024 à Ottawa, pour une expérience musicale inoubliable, où les légendes du blues et les étoiles montantes se rencontrent dans la capitale nationale pour célébrer la richesse et la diversité de la musique blues dans une atmosphère vibrante et accueillante."

const Event1 = () => {
  return (    
    <>    
    <TemplatePage 
    title="Ottawa Bluesfest 2024"
    description={description}
    src="/FestivalBlues1.jpg"
    textButton1= "Plus d'information"
    textButton2="Contactez nous"
    />
      


    </>
  );
};

export default Event1;
