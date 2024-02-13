import Styles from "./home.module.css";
import CartePourLien from "@/components/cartePourLien/cartePourLien";

export default function Home() {
  return (
    <main className={Styles.main}>
      <div className={Styles.imageContainer}>
        <video
          src="/festVid.mp4"
          className={Styles.videoHome}
          autoPlay
          loop
          muted
        />
        <span className={Styles.spanHome}>Festival Accro Ottawa</span>
      </div>

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
          name="evenement 2"
        />
      </div>
    </main>
  );
}
