import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import ProblemStatement from "@/components/landing/ProblemStatement";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import DemandTypes from "@/components/landing/DemandTypes";
import Audience from "@/components/landing/Audience";
import Pricing from "@/components/landing/Pricing";
import Comparison from "@/components/landing/Comparison";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyCTA from "@/components/landing/StickyCTA";

export default function Landing() {
  return (
    <div data-testid="landing-page" className="relative">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemStatement />
        <HowItWorks />
        <Features />
        <DemandTypes />
        <Audience />
        <Pricing />
        <Comparison />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
