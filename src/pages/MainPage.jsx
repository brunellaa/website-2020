import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Skills from "./skills/Skills";
import Work from "./work/Work";

export default function MainPage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Work />
    </main>
  );
}
