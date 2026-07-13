import React from "react";
import Hero from "./components/Hero";
import ReadTogetherSection from "./components/ReadTogetherSection";
import DifferentiatorSection from "./components/DifferentiatorSection";
import JourneySection from "./components/JourneySection";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "./components/TestimonialSection";
import FooterCta from "./components/FooterCta";

export default function App() {
  return (
    <div className="font-sans text-slate-900">
      <Hero />
      <ReadTogetherSection />
      <DifferentiatorSection />
      <JourneySection />
      <PricingSection />
      <TestimonialSection />
      <FooterCta />
    </div>
  );
}
