import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <div className="logo">EduCare</div>

        <div className="flexCenter h-menu">
          <a href="">About Us</a>
          <a href="">Our Values</a>
          <a href="">Testimonials</a>
          <a href="">Contact Us</a>
          <button className="button">
            <a href="">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
