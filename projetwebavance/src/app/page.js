import Image from "next/image";
import CartePourLien from "./cartePourLien/cartePourLien";
import Styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <Image src="/home1.jpg" alt="home" width={10000} height={250} />
      {/* <div>Home Page</div> */}
      <div className={Styles.containerLien}>
        <CartePourLien src="/event1.jpg" alt="event" name="event 1" />
        <CartePourLien src="/event2.jpg" alt="event" name="event 2" />
      </div>
    </main>
  );
}
