import React from 'react'
import TemplatePage from '../../components/templatePage/TemplatePage'
import Card from '@/components/card/Card';
import Styles from '../../components/card/card.module.css'
import style from '../../components/templatePage/templatePage.module.css'

const description = "Le Bluesfest 2024 à Ottawa, qui se déroule du 4 au 14 juillet à LeBreton Flats, propose une programmation captivante avec des artistes comme Tyler Childers et Talk le 12 juillet, et Mötley Crüe le 13 juillet. Cet événement promet d'offrir une expérience musicale diversifiée, reflétant la richesse de la musique blues et au-delà dans un cadre vibrant et accueillant​​​​​​. Il est important de noter que la liste des artistes annoncés n'est pas définitive et pourrait s'enrichir de nouveaux noms au fur et à mesure que le festival approche. Restez à l'écoute pour les mises à jour futures concernant la programmation et les éventuels ajouts d'artistes. Pour les dernières informations et la programmation complète, n'hésitez pas à consulter régulièrement le site officiel du Bluesfest​​."

const Event1 = () => {
 
  return ( 
    <>    
    <TemplatePage 
    title="Ottawa Bluesfest 2024"
    description={description}
    src="/FestivalBlues1.jpg"
    textButton1= "Plus d'information"
    textButton2="Contactez nous"
    lienPage={"https://ottawabluesfest.ca/?gclid=CjwKCAiA_aGuBhACEiwAly57MfcXVBMJlVBl1qW5onyNRqY3SLw9OGClLAlr7hVSrjWxmViQYq_kzRoC0yMQAvD_BwE"}
    />
    <div className={style.container}>
      <h2 className={style.titleh2}>Artistes performants</h2>
    </div>
    <div className={Styles.divisionCard}> 
    <Card className={Styles.containerLien}
    src="/Tyler_Childers3.webp"
    alt="artiste" 
    title = "Tyler Childers"
    description = "Tyler Childers, un artiste qui redéfinit le genre Americana avec sa fusion unique de country, bluegrass et folk. Ses chansons, explorent les joies, les peines et les luttes de la vie quotidienne."
    textButton="Read more"
    isProfil
    lienPage={"https://fr.wikipedia.org/wiki/Tyler_Childers"}
    />
    <Card className={Styles.containerLien}
    src="/Talk.avif"
    alt="artiste" 
    title = "Talk"
    description = {`Découvrez Talk, nouvelle artiste de l'indie rock canadien, dont le single à succès "Run Away to Mars" et l'album "Lord of the Flies & Birds & Bees" avec ses mélodies entraînantes et ses paroles poignantes.`}
    textButton="Read more"
    isProfil
    lienPage={"https://en.wikipedia.org/wiki/Talk_(musician)"}
    />
    <Card className={Styles.containerLien}
    src="/Motley_Crue2.webp"
    alt="artiste" 
    title = "Mötley Crue"
    description = {`Venez voir Mötley Crue, le groupe légendaire du glam metal, qui a marqué les années 80. Leurs morceaux, véritables hymnes comme "Dr. Feelgood" et "Home Sweet Home", incarnent une époque de démesure et de rébellion.`}
    textButton="Read more"
    isProfil
    lienPage={"https://fr.wikipedia.org/wiki/Mötley_Crüe"}
    />
    </div>
    </>
  );
};

export default Event1;
