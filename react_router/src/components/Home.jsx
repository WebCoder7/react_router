import React from 'react';
import Card from '../components/Card';
import image from "../assets/image.jpg";
import './Home.css'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="card-container">
        <Card
          title="Home cardi 1"
          description="Home pageni cardi 1"
          image={image}
        />
        <Card
          title="Home cardi 2"
          description="Home pageni cardi 2"
          image={image}
        />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Home;
