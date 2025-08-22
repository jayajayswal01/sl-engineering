
import Navbar from "@/components/navbar/navbar";
import HomeComponent from "@/components/hero/hero";
import Services from "@/components/services/services";
export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <HomeComponent />
        <Services />
      </main>
    </div>
  );
}
