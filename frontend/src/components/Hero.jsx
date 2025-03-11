import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
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
        </div>
      </section>
    </>
  )
}

export default Hero
