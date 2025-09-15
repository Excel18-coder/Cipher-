
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <ClientLogos />
      <Testimonials />
      <Insights />
      <Contact />
    </div>
  );
};

export default Index;
