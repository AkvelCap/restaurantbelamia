import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MenuCTASection from "@/components/MenuCTASection";
import ReservationSection from "@/components/ReservationSection";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SpecialtiesSection />
      <TestimonialsSection />
      <MenuCTASection />
      <ReservationSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
};

export default Index;
