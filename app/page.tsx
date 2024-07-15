"use client";

import React from "react";
import Navbar from "./components/guest/Navbar";
import Cta from "./components/guest/Cta";
import HeroSection from "./components/guest/HeroSection";
import Cta1 from "./components/guest/Cta1";
import Cta2 from "./components/guest/Cta2";
import Features from "./components/guest/Features";
import Trust from "./components/guest/Trust";
import Collaboration from "./components/guest/Collaboration";
import CaseStudy from "./components/guest/CaseStudy";
import Reviews from "./components/guest/Reviews";
import Awards from "./components/guest/Awards";
import Award from "./components/guest/Awards";
import Statistic from "./components/guest/Statistics";
import Cta3 from "./components/guest/Cta3";
import Footer from "./components/guest/Footer";
import FeaturesSection from "./components/guest/FeaturesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
     
      <HeroSection />
      <FeaturesSection />

      <Cta />
      <Cta1 />
      <Cta2 />
      <Features />
      <Trust />
      <Collaboration />
      <CaseStudy />
      <Reviews />
      <Award />
      <Statistic />
      <Cta3 />
      <Footer />
    </main>
  );
}
