import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src="/home1.jpg" alt="home" width={10000} height={250} />
      {/* <div>Home Page</div> */}
    </main>
  );
}
