import React from "react";

import Hero from "./Hero";
import BlueGradientSection from "./BlueGradientSection";
import BusinessSupport from "./BusinessSupport";
import Services from "./Services";
import { HoverPreview } from "../components/ui/hover-preview";
import Partners from "./Partners";
import { WaitlistHero } from "../components/ui/waitlist-hero";
import Footer from "./Footer.tsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BlueGradientSection />
      <BusinessSupport />
      <Services />
      <HoverPreview />
      <Partners />
      <WaitlistHero />
      <Footer />
    </>
  );
}
