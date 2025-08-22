import Image from "next/image";
import style from "./page.module.css"
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import HomeComponent from "@/components/home/home";
export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <HomeComponent />
      </main>
    </div>
  );
}
