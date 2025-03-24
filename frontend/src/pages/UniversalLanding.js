import React from "react";
import Header from "../components/common/header/Header";
import Hero from "../components/common/hero/Hero";
import Footer  from "../components/common/footer/footer";


const LandingPage = () => {
  return (
    <div>
      <div>
        <Header/>
        <Hero />
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;
