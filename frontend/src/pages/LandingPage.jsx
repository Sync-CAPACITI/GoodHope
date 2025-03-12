import React from "react";
import Footer from "./components/common/footer/footer";
import Header from "./components/common/header/Header";
import Hero from "./components/common/hero/Hero";
import TopRated from "./components/topRated/TopRated";

const LandingPage = () => {
  return (
    <div>
      <div>
        <Header />
        <Hero />
      </div>
      <TopRated />
      <Footer />
    </div>
  );
};

export default LandingPage;
