
import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Section from "./Section/Section";
import "swiper/css";
import "swiper/css/navigation";
import SongsSection from "./SongsSection/SongsSection";
function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section
        title="Top Albums"
        apiEndpoint="https://qtify-backend.labs.crio.do/albums/top"
        testIdPrefix="top"
      />

      <Section
        title="New Albums"
        apiEndpoint="https://qtify-backend.labs.crio.do/albums/new"
        testIdPrefix="new"
      />
      <SongsSection />
    </>
  );
}

export default App;
