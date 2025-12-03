import { useState, useEffect } from "react";
import { AuroraHero } from "@/components/ui/aurora-hero";
import { VercelV0Chat } from "@/components/ui/v0-ai-chat";
import Navigation from "@/components/Navigation";
import PricingCards from "@/components/PricingCards";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navigation />
      
      <AuroraHero />

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/[0.02] to-transparent" />
        <div className="relative z-10">
          <VercelV0Chat />
        </div>
      </section>

      <PricingCards />

      <FAQ />

      <Footer />
    </div>
  );
};

export default Index;
