import Available from "@/components/available/Available";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Skils from "@/components/Skills/Skils";
import TestimonialsSectionDemo from "@/components/Testimonale/Testimonial";

export default function Home() {
  return (
    <>
    <Navbar/>
   <Hero/>
   <Skils/>
   <Services/>
   <TestimonialsSectionDemo/>
   <Available />
    </>
  );
}

