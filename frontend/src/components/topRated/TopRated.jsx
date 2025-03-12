import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import "swiper.css";
import "./TopRated.css";
import data from "../../utils/slider.json";

const TopRated = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">
            Discover the Top Rated Special Needs Schools
          </span>
          <span className="primaryText">
            Explore the best schools based on parent reviews and ratings
          </span>
        </div>
        <Swiper>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={card.image} alt={card.name} />

                <span className="secodaryText r-price">
                  <span style={{ color: "orange" }}></span>
                  <span>School Name</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">
                  <h3>{card.name}</h3>
                </span>
                <span className="secodaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopRated;
