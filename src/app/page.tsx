import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-5";
import WallOfLoveSection from "@/components/testimonials";
import TeamSection from "@/components/team";
import FAQsFour from "@/components/faqs-4";
import FooterSection from "@/components/footer";
import NewsletterSection from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <WallOfLoveSection />
      <TeamSection />
      <FAQsFour />
      <NewsletterSection />
      <FooterSection />
    </>
  );
}
