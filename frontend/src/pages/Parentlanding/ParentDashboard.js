import React from 'react';
import './index.css';

const ParentDashboard = () => {
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

export default ParentDashboard;
