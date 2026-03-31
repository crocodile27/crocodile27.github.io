"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import Team from "@/components/sections/Team";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <main>
      <Navbar onWaitlistClick={() => setWaitlistOpen(true)} />
      <Hero onWaitlistClick={() => setWaitlistOpen(true)} />
      <Problem />
      <HowItWorks />
      <Team />
      <Footer />
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </main>
  );
}
