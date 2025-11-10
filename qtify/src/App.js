import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Section from "./Section/Section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section
        title="Top Albums"
        apiEndpoint="https://qtify-backend.labs.crio.do/albums/top"
      />
    </>
  );
}

export default App;
