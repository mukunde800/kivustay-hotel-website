import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import FeaturedRooms from "../components/home/FeaturedRooms";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CtaSection from "../components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedRooms />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}