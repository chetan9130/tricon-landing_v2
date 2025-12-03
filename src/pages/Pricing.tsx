import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingCards from "@/components/PricingCards";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navigation />
      
      <main className="pt-24">
        <PricingCards />
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
