import Image from "next/image";
import Styles from "./home.module.css";
import CartePourLien from "@/components/cartePourLien/cartePourLien";

export default function Home() {
  return (
    <main className={Styles.main}>
      <img src="/home1.jpg" alt="home" width="100%" height="750" />
      {/* <div>Home Page</div> */}
      <div className={Styles.containerLien}>
        <CartePourLien
          href="/event1"
          src="/event1.jpg"
          alt="event"
          name="event 1"
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
