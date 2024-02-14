import React from 'react'
import TemplatePage from '../../components/templatePage/TemplatePage'

const description = "Le Bluesfest 2024 à Ottawa, qui se déroule du 4 au 14 juillet à LeBreton Flats, propose une programmation captivante avec des artistes comme Tyler Childers et Talk le 12 juillet, et Mötley Crüe le 13 juillet. Cet événement promet d'offrir une expérience musicale diversifiée, reflétant la richesse de la musique blues et au-delà dans un cadre vibrant et accueillant​​​​​​. Il est important de noter que la liste des artistes annoncés n'est pas définitive et pourrait s'enrichir de nouveaux noms au fur et à mesure que le festival approche. Restez à l'écoute pour les mises à jour futures concernant la programmation et les éventuels ajouts d'artistes. Pour les dernières informations et la programmation complète, n'hésitez pas à consulter régulièrement le site officiel du Bluesfest​​."

const Event1 = () => {
  return (    
    <>    
    <TemplatePage 
    title="Ottawa Bluesfest 2024"
    description={description}
    src="/FestivalBlues1.jpg"
    textButton1= "Plus d'information"
    textButton2="Contactez-nous"
    lienPage={"https://ottawabluesfest.ca/?gclid=CjwKCAiA_aGuBhACEiwAly57MfcXVBMJlVBl1qW5onyNRqY3SLw9OGClLAlr7hVSrjWxmViQYq_kzRoC0yMQAvD_BwE"}
    />
    </>
  );
};

export default Event1;
