import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProfilesSection from "@/components/ProfilesSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProfilesSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Index;
