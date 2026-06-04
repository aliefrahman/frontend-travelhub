import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Categories from "@/components/Categories";
import FeaturedTours from "@/components/FeaturedTours";
import Destinations from "@/components/Destinations";
import B2BSection from "@/components/B2BSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Categories />
      <FeaturedTours />
      <Destinations />
      <B2BSection />
      <Footer />
    </main>
  );
}