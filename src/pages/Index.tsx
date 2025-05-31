
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TrustedBy } from "@/components/TrustedBy";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CoverageMap } from "@/components/CoverageMap";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChooseUs />
      <CoverageMap />
      <Footer />
    </div>
  );
};

export default Index;
