import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
