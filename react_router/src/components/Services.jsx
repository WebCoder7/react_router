import React from 'react';
import Card from '../components/Card';
import images from "../assets/image2.jpg";
const Services = () => {
  return (
    <div>
      <h1>Services Page</h1>
      <div className="card-container">
        <Card
          title="Service cardi 1"
          description="Service pageni nomi 1"
          image={images}
        />
        <Card
          title="Service cardi 2"
          description="Service pageni nomi 2"
          image={images}
        />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Services;
