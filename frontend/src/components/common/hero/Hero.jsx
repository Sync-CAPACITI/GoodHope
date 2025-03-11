import React from 'react'; 
import './Hero.css';
import { HiLocationMarker } from "react-icons/hi";


const Hero = () => {
  return (

    
    <section className="hero-wrapper">

      
        <div className="paddings innerWidth flexCenter hero-container">

          {/* left side */}

            <div className="flexColStart hero-left">
                <div className="hero-title">
                  <div className="orange-circle" />
                  <h1>Find The <br /> Best School <br/> for Your Child</h1>
                </div>

                <div className="flexColStart hero-des">
                  <span>Personalized school recommendations at your fingertips</span>
                  <span>Easily compare, filter, and book appointments with top schools</span>
                </div>

                <div className=" flexCenter search-bar">
                  <HiLocationMarker color = "var(--blue)" size = {25} />
                  <input type="text" />
                  <button className="button">Search</button>
                </div>
            </div>

            {/* Right side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./images/hero.jpg" alt="hero diversity image" />
                </div>
            </div>
        </div>
   


      {/* <section className='hero'>
        <div className='container'>
          <Heading title='Find the Best Special Needs School for Your Child ' subtitle='Easily search, compare, and book appointments with verified schools tailored to your child special needs' />

          <form className='flex'>
            <div className='box'>
              <span>Search by location</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>School Type</span>
              <input type='text' placeholder='School Type' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div> */}
        
       </section>
  )
}

export default Hero
