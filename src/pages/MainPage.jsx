import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skills/Skills";
import Work from "./work/Work";
import Contact from "./contact/Contact";

export default function MainPage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <div className="mobile-hide">
        <Work />
      </div>
      <Contact />
    </main>
  );
}
