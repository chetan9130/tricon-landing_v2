import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Navigation />
      
      <main className="pt-24">
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default FaqPage;
