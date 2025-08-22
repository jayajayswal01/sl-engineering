import Image from "next/image";
import style from "./page.module.css"
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
      </main>
    </div>
  );
}
