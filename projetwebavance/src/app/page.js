import Image from "next/image";
import Styles from "./home.module.css";
import CartePourLien from "@/components/cartePourLien/cartePourLien";

export default function Home() {
  return (
    <main className={Styles.main}>
      <div className={Styles.imageContainer}>
        <img src="/home1.jpg" alt="home" className={Styles.imageHome} />
        <span className={Styles.spanHome}>Festival Accro Ottawa</span>
      </div>

      {/* <div>Home Page</div> */}
      <div className={Styles.containerLien}>
        <CartePourLien
          href="/event1"
          src="/event1.jpg"
          alt="event"
          name="Ottawa Bluesfest 2024"
        />
        <CartePourLien
          href="/event2"
          src="/event2.jpg"
          alt="event"
          name="event 2"
        />
      </div>
    </main>
  );
}
