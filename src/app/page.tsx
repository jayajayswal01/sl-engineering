
import Navbar from "@/components/navbar/navbar";
import HomeComponent from "@/components/hero/hero";
import Services from "@/components/services/services";
import Products from "@/components/products/products";
import Gallary from "@/components/gallary/gallary";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <HomeComponent />
        <Services />
        <Products />
        <Gallary />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
