import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <div className="logo"><h1>EduCare</h1></div>

        <div className="flexCenter h-menu">
          <a href="">About Us</a>
          <a href="">Our Values</a>
          <a href="">Testimonials</a>
          <a href="">Contact Us</a>
          <button className="button">
              <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
