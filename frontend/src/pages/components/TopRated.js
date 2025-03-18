import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import "swiper.css";
import "./TopRated.css";
import data from "../../utils/slider.json";

// const TopRated = () => {
//   return (
//     <section className="r-wrapper">
//       <div className="paddings innerWidth r-container">
//         <div className="r-head flexColStart">
//           <span className="orangeText">
//             Discover the Top Rated Special Needs Schools
//           </span>
//           <span className="primaryText">
//             Explore the best schools based on parent reviews and ratings
//           </span>
//         </div>
//         <Swiper>
//           {data.map((card, i) => (
//             <SwiperSlide key={i}>
//               <div className="r-card">
//                 <img src={card.image} alt={card.name} />

//                 <span className="secodaryText r-price">
//                   <span style={{ color: "orange" }}></span>
//                   <span>School Name</span>
//                   <span>{card.price}</span>
//                 </span>

//                 <span className="primaryText">
//                   <h3>{card.name}</h3>
//                 </span>
//                 <span className="secodaryText">{card.detail}</span>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };
// src/TopRatedSchools.js
import React from "react";
import "./TopRated.css"; // Import CSS for styling

const TopRatedSchools = () => {
  const schools = [
    {
      id: 1,
      name: "Sunshine Academy",
      rating: 4.9,
      address: "123 Happy St",
      description: "Specialized programs for various needs.",
    },
    {
      id: 2,
      name: "Rainbow School",
      rating: 4.7,
      address: "456 Color Ave",
      description: "Inclusive environment with expert staff.",
    },
    {
      id: 3,
      name: "Hope High School",
      rating: 4.8,
      address: "789 Dream Blvd",
      description: "Advanced resources for special needs education.",
    },
  ];

  return (
    <div className="top-rated-schools">
      <h2>Top Rated Schools for Special Needs</h2>
      <div className="cards-container">
        {schools.map((school) => (
          <div key={school.id} className="school-card">
            <h3>{school.name}</h3>
            <p>Address: {school.address}</p>
            <p>Description: {school.description}</p>
            <p>Rating: {school.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedSchools;
